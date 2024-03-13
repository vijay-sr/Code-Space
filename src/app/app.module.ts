import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { LoginModuleModule } from './login-module/login-module.module';
import { DashBoardModule } from './dash-board/dash-board.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ServicesModule } from './services/services.module';
import { TestHomeComponent } from './dash-board/test-home/test-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModuleModule,
    DashBoardModule,
    HttpClientModule,
    ServicesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
