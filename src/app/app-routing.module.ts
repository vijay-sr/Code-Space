import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { BlogComponent } from './blog/blog.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'contactus', component: ContactUsComponent },
{path:'item-listing', component: ItemsListComponent },
{path:'item-details', component: ItemDetailsComponent },
{path:'blog', component: BlogComponent },
{path:'explore', component: ExploreComponent },
// {path:'review', loadComponent:()=>import('./component/review/review.component'').then(m=>m.ReviewComponent) },
{path:'account', component: AccountProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
