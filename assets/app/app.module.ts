import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from './messages/message.module';

import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './shared/header/header.component';
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { ErrorComponent } from './errors/error.component';
import { routing } from './app.routing';
import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        MessageModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}