const express = require('express')
const express_file_upload = require('express-fileupload')
const nodemailer = require('nodemailer')
const app = express();

const mongoose = require('./database/mongoose');

const User = require('./database/models/User');
const Connection = require('./database/models/Connection');
const Bill = require('./database/models/Bills');
const Charges = require('./database/models/Charges');
const Otp = require('./database/models/Otp');
const Denied_connection = require('./database/models/DeniedConnection');
const DeniedConnection = require('./database/models/DeniedConnection');
const { connection } = require('mongoose');
app.use(express.json());
app.use(express_file_upload())
//To allow cross origin requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function sendMail(mail_id, message, subject) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "youremail@example.com", // generated ethereal user
            pass: "your password", // generated ethereal password
        },
    });

    let mailoption = {
        from: "Electrify",
        to: mail_id,
        subject: subject,
        text: message,
        html: `<h1>` + message + `</h1>`
    }

    let info = await transporter.sendMail(mailoption);
}

/*----------------------------------- Email Actions -----------------------------------------------*/
app.post('/email_message', (req, res) => {
    sendMail("vyompatel95745@gmail.com", 'Hello', 'testing');
    res.send("mail sent")
})

/*----------------------------------- File Actions -----------------------------------------------*/
app.get('/document', (req, res) => {
    res.sendFile(__dirname + '/document.html')
})

app.get('/file/:id', (req, res) => {
    res.sendFile(__dirname + '/documents/' + req.params.id);
})

app.post('/document', (req, res) => {
    if (req.files.address) {
        var file = req.files.address
        var filename = file.name
        file.mv('./documents/' + filename, function (err) {
            if (err) {
                res.send(err)
            } else {
                res.send(filename)
            }
        })
    }
    else if (req.files.userid) {
        var file = req.files.userid
        var filename = file.name
        file.mv('./documents/' + filename, function (err) {
            if (err) {
                res.send(err)
            } else {
                res.send(filename)
            }
        })
    }
})

/*----------------------------------- User Actions -----------------------------------------------*/
//To get user with gven id
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.send(user))
        .catch((error) => console.log(error));
});

//To get user by email
app.get('/user_by_email/:email', (req, res) => {
    User.findOne({ email: req.params.email })
        .then((user) => {
            if (!user) {
                res.status(401).send('Invalid email' + req.body.email)
            } else {
                res.send(user)
            }
        })
        .catch((error) => console.log(error))
});


//To send OTP
app.post('/sendOTP', (req, res) => {
    console.log(req.body.email)
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                res.status(401).send('Invalid email' + req.body.email)
            } else {
                otp = new Otp();
                otp.mail = req.body.email
                otp.time = (new Date().getTime()) % 10000
                otp.otp = (otp.time) % 10000
                let message = otp.otp + " is your one time password to"
                otp.save()
                    .then(
                        sendMail(req.body.email, message, "OTP to update password"),
                        res.send(otp),
                    )
                    .catch((error) => console.log(error));
            }
        })
        .catch((error) => console.log(error));
});


//To get all users
app.get('/users', (req, res) => {
    User.find()
        .then((user) => res.send(user))
        .catch((error) => console.log(error));
});

//To create new user
app.post('/users', (req, res) => {
    (new User(req.body))
        .save()
        .then((user) => res.send(user))
        .catch((error) => console.log(error));
});

//To verify login credentials
app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                res.status(401).send('Invalid email')
            } else {
                if (user.password !== req.body.password) {
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
                }
            }
        })
        .catch((error) => console.log(error));
});

//To update user details
app.patch('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then((user) => res.send(user))
        .catch((error) => console.log(error));
});

/*----------------------------------- Connection Actions -----------------------------------------------*/
//To get connection with gven id
app.get('/connections/:id', (req, res) => {
    Connection.findById(req.params.id)
        .then((connection) => res.send(connection))
        .catch((error) => console.log(error));
});

//deny connection
app.post('/denied_connection', (req, res) => {
    (new DeniedConnection(req.body))
        .save()
        .then((denied_connection) => {
            let mail = "";
            Connection.findById(denied_connection.connection_id)
                .then((connection) => {
                    User.findById(connection.user_id)
                        .then((user) => {
                            mail = user.email
                            sendMail(mail, "your connection with connection id : " + denied_connection.connection_id + " was denied due to following reason : " + denied_connection.reason, "Your connection request was denied")
                        })
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
            res.send(denied_connection)
        })
        .catch((error) => console.log(error));
})

//To get all connection
app.get('/connections', (req, res) => {
    Connection.find()
        .then((connection) => res.send(connection))
        .catch((error) => console.log(error));
});

//To get all connections of an user
app.get('/connectionsByUser/:id', (req, res) => {
    Connection.find({ user_id: req.params.id })
        .then((connections) => {
            res.send(connections)
        })
        .catch((error) => console.log(error));
});


//To get all new connection requests
app.get('/new_connection_requests', (req, res) => {
    Connection.find({ status: 'requested' })
        .then((connection) => {
            res.send(connection)
        })
        .catch((error) => console.log(error));
});

//To get all onfield connection requests
app.get('/onfield_requests', (req, res) => {
    Connection.find({ status: 'documents verified' })
        .then((connection) => {
            res.send(connection)
        })
        .catch((error) => console.log(error));
});

//To get all pending connections
app.get('/pending_connections', (req, res) => {
    Connection.find({ status: 'approved' })
        .then((connection) => {
            res.send(connection)
        })
        .catch((error) => console.log(error));
});

//To get all denied connection requests
app.get('/denied_connections', (req, res) => {
    Connection.find({ status: 'denied' })
        .then((connection) => {
            res.send(connection)
        })
        .catch((error) => console.log(error));
});

//To get all running connection
app.get('/running_connections', (req, res) => {
    Connection.find({ status: 'running' })
        .then((connection) => {
            res.send(connection)
        })
        .catch((error) => console.log(error));
});


//To create new connection
app.post('/connections', (req, res) => {
    (new Connection(req.body))
        .save()
        .then((connection) => res.send(connection))
        .catch((error) => console.log(error));
});

//To update connection details
app.patch('/connections/:id', (req, res) => {
    console.log("update request");
    Connection.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then((connection) => res.send(connection))
        .catch((error) => console.log(error));
});


/*----------------------------------- Bills Actions -----------------------------------------------*/
//To get bill with gven id
app.get('/bills/:id', (req, res) => {
    Bill.findById(req.params.id)
        .then((bill) => res.send(bill))
        .catch((error) => console.log(error));
});

//To get all bills
app.get('/bills', (req, res) => {
    Bill.find()
        .then((bill) => res.send(bill))
        .catch((error) => console.log(error));
});

//To pay bill
app.patch('/payBill/:id', (req, res) => {
    Bill.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then((bill) => {
            User.findById(bill.user_id)
                .then((user) => {
                    mail = user.email
                    sendMail(mail, "Bill payment recorded successfully for Bill Id " + bill._id + " Amount : " + bill.total_bill, "Bill payment successfull")
                    Connection.findById(bill.connection_id)
                        .then((connection) => {
                            connection.balance = 0
                            Connection.findByIdAndUpdate(connection._id, { $set: connection })
                                .then((connection) => {
                                    res.send(bill)
                                })
                        })
                })
                .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
});



//To create new bill
app.post('/bills', (req, res) => {
    (new Bill(req.body))
        .save()
        .then((bill) => res.send(bill))
        .catch((error) => console.log(error));
});

//To update connection details
app.patch('/bills/:id', (req, res) => {
    Bill.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then((bill) => res.send(bill))
        .catch((error) => console.log(error));
});

//To get all bills by user
app.get('/getBillsByUser/:id', (req, res) => {
    Bill.find({ user_id: req.params.id })
        .then((bills) => res.send(bills))
        .catch((error) => console.log(error));
});

//To get all bills by Connection
app.get('/getBillsByConnection/:id', (req, res) => {
    Bill.find({ connection_id: req.params.id })
        .then((bills) => res.send(bills))
        .catch((error) => console.log(error));
});


/*----------------------------------- Charges Actions -----------------------------------------------*/
//To get charges with gven id
app.get('/charges/:id', (req, res) => {
    Charges.findById(req.params.id)
        .then((charges) => res.send(charges))
        .catch((error) => console.log(error));
});

//To get charges with gven connection type
app.get('/chargesByType/:type', (req, res) => {
    Charges.findOne({ connection_type: req.params.type })
        .then((charges) => res.send(charges))
        .catch((error) => console.log(error));
});

//To get all charges
app.get('/charges', (req, res) => {
    Charges.find()
        .then((charges) => res.send(charges))
        .catch((error) => console.log(error));
});


//To create new charges
app.post('/charges', (req, res) => {
    (new Charges(req.body))
        .save()
        .then((charges) => res.send(charges))
        .catch((error) => console.log(error));
});

//To update charges details
app.patch('/charges/:id', (req, res) => {
    Charges.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then((charges) => res.send(charges))
        .catch((error) => console.log(error));
});


app.listen(3000, () => console.log("Backend : Server connected on port 3000"));