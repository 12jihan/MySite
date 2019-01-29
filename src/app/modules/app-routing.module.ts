import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './my-website/components/home-page/home-page.component';
import { MyContentComponent } from './my-website/components/my-content/my-content.component'; 
const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
