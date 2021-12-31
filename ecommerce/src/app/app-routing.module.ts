import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BusinessComponent } from './pages/business/business.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewBusinessComponent } from './pages/view-business/view-business.component';

import { CreateBusinessComponent } from './pages/create-business/create-business.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'business',component:BusinessComponent},
  {path:'business/:id',component:ViewBusinessComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'create-business',component:CreateBusinessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
