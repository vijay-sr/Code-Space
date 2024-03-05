import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { DashBoardModule } from './dash-board/dash-board.module';
import { LoginModuleModule } from './login-module/login-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AppModule,
    ServerModule,
    DashBoardModule,
    LoginModuleModule,
    SharedModuleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
