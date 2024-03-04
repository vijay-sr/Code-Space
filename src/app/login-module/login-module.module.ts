import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginModuleComponent } from './login-module.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    LoginModuleComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule
  ]
})
export class LoginModuleModule { }
