import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './dash-board/home/home.component';
import { ContactUsComponent } from './dash-board/contact-us/contact-us.component';
import { ItemsListComponent } from './dash-board/items-list/items-list.component';
import { ItemDetailsComponent } from './dash-board/item-details/item-details.component';
import { BlogComponent } from './dash-board/blog/blog.component';
import { ExploreComponent } from './dash-board/explore/explore.component';
import { AccountProfileComponent } from './dash-board/account-profile/account-profile.component';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule) },
{ path: 'dash-board', loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
