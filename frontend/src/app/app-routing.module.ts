import { ProfileComponent } from './user-components/profile/profile.component';
import { MyConnectionsComponent } from './connection-components/my-connections/my-connections.component';
import { ViewCustomerComponent } from './bill-components/view-customer/view-customer.component';
import { MyBillsComponent } from './bill-components/my-bills/my-bills.component';
import { GenerateBillComponent } from './bill-components/generate-bill/generate-bill.component';
import { ManageChargesComponent } from './components/manage-charges/manage-charges.component';
import { ForgotPasswordComponent } from './user-components/forgot-password/forgot-password.component';
import { RunningConnectionsComponent } from './connection-components/running-connections/running-connections.component';
import { DeniedConnectionsComponent } from './connection-components/denied-connections/denied-connections.component';
import { LoginComponent } from './user-components/login/login.component';
import { ViewPendingConnectionsComponent } from './connection-components/view-pending-connections/view-pending-connections.component';
import { PendingConnectionsComponent } from './connection-components/pending-connections/pending-connections.component';
import { ViewOnfieldRequestComponent } from './connection-components/view-onfield-request/view-onfield-request.component';
import { OnfieldRequestsComponent } from './connection-components/onfield-requests/onfield-requests.component';
import { ConnectionRequestsComponent } from './connection-components/connection-requests/connection-requests.component';
import { ViewUsersComponent } from './user-components/view-users/view-users.component';
import { CreateUserComponent } from './user-components/create-user/create-user.component';
import { NewConnectionComponent } from './connection-components/new-connection/new-connection.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAdminComponent } from './connection-components/view-admin/view-admin.component';

const routes: Routes = [
  { path : 'users', component : ViewUsersComponent},
  { path : 'users/register', component : CreateUserComponent},
  { path : 'users/forgot_password', component : ForgotPasswordComponent},
  { path : 'login', component : LoginComponent},
  { path : 'connections/new_connection', component : NewConnectionComponent},
  { path : 'connections/new_requests', component : ConnectionRequestsComponent},
  { path : 'connections/onfield_requests', component : OnfieldRequestsComponent},
  { path : 'connections/pending_connections', component : PendingConnectionsComponent},
  { path : 'connections/denied_connections', component : DeniedConnectionsComponent},
  { path : 'connections/running_connections', component : RunningConnectionsComponent},
  { path : 'connections/view_connection_admin', component : ViewAdminComponent},
  { path : 'connections/view_onfield_request', component : ViewOnfieldRequestComponent},
  { path : 'connections/view_pending_connection', component : ViewPendingConnectionsComponent},
  { path : '', component : HomeComponent},
  { path : 'manage_charges', component : ManageChargesComponent},
  { path : 'generate_bill', component : GenerateBillComponent},
  { path : 'my_bills', component : MyBillsComponent},
  { path : 'view_my_bill', component : ViewCustomerComponent},
  { path : 'my_connections', component : MyConnectionsComponent},
  { path : 'profile', component : ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
