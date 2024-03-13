import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { HomeComponent } from '../dash-board/home/home.component';
import { ContactUsComponent } from '../dash-board/contact-us/contact-us.component';
import { AccountProfileComponent } from '../dash-board/account-profile/account-profile.component';
import { ItemsListComponent } from '../dash-board/items-list/items-list.component';
import { ItemDetailsComponent } from '../dash-board/item-details/item-details.component';
import { BlogComponent } from '../dash-board/blog/blog.component';
import { ExploreComponent } from '../dash-board/explore/explore.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { GalleryComponent } from './gallery/gallery.component';
import { TestHomeComponent } from './test-home/test-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    AccountProfileComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    BlogComponent,
    ExploreComponent,
    GalleryComponent,
    TestHomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DashBoardRoutingModule,
    SharedModuleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DashBoardModule { }
