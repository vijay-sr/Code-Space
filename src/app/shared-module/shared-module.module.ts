import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { SharedModuleComponent } from './shared-module.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashBoardModule } from '../dash-board/dash-board.module';
import { DashBoardComponent } from '../dash-board/dash-board.component';


@NgModule({
  declarations: [
    SharedModuleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
  ],
})
export class SharedModuleModule { }
