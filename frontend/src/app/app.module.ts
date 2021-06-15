import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewUsersComponent } from './user-components/view-users/view-users.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './user-components/create-user/create-user.component';
import { NewConnectionComponent } from './connection-components/new-connection/new-connection.component';
import { ConnectionRequestsComponent } from './connection-components/connection-requests/connection-requests.component';
import { ViewAdminComponent } from './connection-components/view-admin/view-admin.component';
import { OnfieldRequestsComponent } from './connection-components/onfield-requests/onfield-requests.component';
import { ViewOnfieldRequestComponent } from './connection-components/view-onfield-request/view-onfield-request.component';
import { PendingConnectionsComponent } from './connection-components/pending-connections/pending-connections.component';
import { ViewPendingConnectionsComponent } from './connection-components/view-pending-connections/view-pending-connections.component';
import { LoginComponent } from './user-components/login/login.component';
import { DeniedConnectionsComponent } from './connection-components/denied-connections/denied-connections.component';
import { RunningConnectionsComponent } from './connection-components/running-connections/running-connections.component';
import { ForgotPasswordComponent } from './user-components/forgot-password/forgot-password.component';
import { ManageChargesComponent } from './components/manage-charges/manage-charges.component';
import { GenerateBillComponent } from './bill-components/generate-bill/generate-bill.component';
import { MyBillsComponent } from './bill-components/my-bills/my-bills.component';
import { ViewCustomerComponent } from './bill-components/view-customer/view-customer.component';
import { MyConnectionsComponent } from './connection-components/my-connections/my-connections.component';
import { ProfileComponent } from './user-components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    HomeComponent,
    CreateUserComponent,
    NewConnectionComponent,
    ConnectionRequestsComponent,
    ViewAdminComponent,
    OnfieldRequestsComponent,
    ViewOnfieldRequestComponent,
    PendingConnectionsComponent,
    ViewPendingConnectionsComponent,
    LoginComponent,
    DeniedConnectionsComponent,
    RunningConnectionsComponent,
    ForgotPasswordComponent,
    ManageChargesComponent,
    GenerateBillComponent,
    MyBillsComponent,
    ViewCustomerComponent,
    MyConnectionsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
