import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule) },
{ path: 'dash-board', loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
