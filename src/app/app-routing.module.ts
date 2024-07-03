import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './view/product/product-list/product-list.component';
import { UsersListComponent } from './view/users-list/users-list.component';
import { LoginComponent } from './view/login/login.component';
import { SalesListComponent } from './view/product/sale-list/sale-list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"dashboard", pathMatch:"full"},
  {path:"productos" ,component:ProductListComponent, canActivate: [AuthGuard]},
  {path:"users", component:UsersListComponent, canActivate: [AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"sale", component:SalesListComponent, canActivate: [AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
