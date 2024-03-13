import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SculptorpageComponent } from './sculptorpage/sculptorpage.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'home', component:HomeComponent,title:'Home'},
  {path:'about', component:AboutComponent, title:'About'},
  {path:'sculptor/:id', component:SculptorpageComponent},
  {path:'**', component:NotFoundComponent, title:'404 NotFound'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
