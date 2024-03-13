import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SculptorpageComponent } from './sculptorpage/sculptorpage.component';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'albums/:id', component:SculptorpageComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'home', component:Home1Component,title:'Home'},
  {path:'about', component:AboutComponent, title:'About'},
  
  {path:'albums', component:HomeComponent, title:'Albums'},
  {path:'**', component:NotFoundComponent, title:'404 NotFound'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
