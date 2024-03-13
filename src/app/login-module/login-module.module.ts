import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginModuleComponent } from './login-module.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginModuleComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    FormsModule
  ]
})
export class LoginModuleModule { }
