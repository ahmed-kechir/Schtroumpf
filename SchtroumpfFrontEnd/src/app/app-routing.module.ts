import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
const routes: Routes = [
  { path: "registre", component: SignupComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  
 /* {
    path: "new",
    canActivate: [AuthGuard],
    component: NewItemComponent,
    pathMatch: "full"
  },
  {
    path: "items",
    canActivate: [AuthGuard],
    component: ItemsListComponent,
    pathMatch: "full"
  },
  {
    path: "item/:id",
    canActivate: [AuthGuard],
    component: ItemDetailsComponent,
    pathMatch: "full"
  },
  {
    path: "",
    canActivate: [AuthGuard],
    component: HomeComponent,
    pathMatch: "full"
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
