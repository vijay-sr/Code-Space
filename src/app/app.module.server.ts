import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    DashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
