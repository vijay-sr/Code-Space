import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { AccountProfileComponent } from './dashboard/account-profile/account-profile.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ItemsListComponent } from './dashboard/items-list/items-list.component';
import { ItemDetailsComponent } from './dashboard/item-details/item-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './dashboard/blog/blog.component';
import { ExploreComponent } from './dashboard/explore/explore.component';
import { DashboardModule } from './dashboard/dashboard.module';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // ContactUsComponent,
    // AccountProfileComponent,
    // HeaderComponent,
    // FooterComponent,
    // ItemsListComponent,
    // ItemDetailsComponent,
    // BlogComponent,
    // ExploreComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // DashboardModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
