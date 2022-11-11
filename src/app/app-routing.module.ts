import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { httpFactory } from "./common/services/http.factory";
import { AboutComponent, WordMergerComponent } from './index'

const routes: Routes = [
    
  //login related
  {
    path: '',
    component: WordMergerComponent,
  },

  //error related
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }