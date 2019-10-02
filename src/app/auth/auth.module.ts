import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 
import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
        SignupComponent, 
        LoginComponent
    ],
    imports: [
      AngularFireAuthModule,
      SharedModule,
      AuthRoutingModule
    ]
  })
export class AuthModule {}