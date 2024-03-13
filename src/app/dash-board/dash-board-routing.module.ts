import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../dash-board/home/home.component';
import { ContactUsComponent } from '../dash-board/contact-us/contact-us.component';
import { ItemsListComponent } from '../dash-board/items-list/items-list.component';
import { ItemDetailsComponent } from '../dash-board/item-details/item-details.component';
import { BlogComponent } from '../dash-board/blog/blog.component';
import { ExploreComponent } from '../dash-board/explore/explore.component';
import { AccountProfileComponent } from '../dash-board/account-profile/account-profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'contactus', component: ContactUsComponent },
{path:'item-listing', component: ItemsListComponent },
{path:'item-details', component: ItemDetailsComponent },
{path:'blog', component: BlogComponent },
{path:'explore', component: ExploreComponent },
{path:'account', component: AccountProfileComponent},
{path:'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
