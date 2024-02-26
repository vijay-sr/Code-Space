import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { AccountProfileComponent } from './dashboard/account-profile/account-profile.component';
import { ItemsListComponent } from './dashboard/items-list/items-list.component';
import { ItemDetailsComponent } from './dashboard/item-details/item-details.component';
import { BlogComponent } from './dashboard/blog/blog.component';
import { ExploreComponent } from './dashboard/explore/explore.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'contactus', component: ContactUsComponent },
{path:'item-listing', component: ItemsListComponent },
{path:'item-details', component: ItemDetailsComponent },
{path:'blog', component: BlogComponent },
{path:'explore', component: ExploreComponent },
{path:'login', component: LoginPageComponent },
// {path:'review', loadComponent:()=>import('./component/review/review.component'').then(m=>m.ReviewComponent) },
{path:'account', component: AccountProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
