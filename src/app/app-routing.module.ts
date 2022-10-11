import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { AddUserComponent } from './component/user/add-user/add-user.component';
import { EditUserComponent } from './component/user/edit-user/edit-user.component';
import { AdminComponent } from './page/admin/admin/admin.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductComponent } from './page/admin/product/product.component';
import { UserComponent } from './page/admin/user/user.component';
import { GeneralComponent } from './page/general/general.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginComponent } from './page/login/login.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  // AUTH VIEW
  { path: '', component: HomePageComponent },
  // ADMIN VIEW
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // product
      {
        path: 'product',
        component: ProductComponent,
        children: [
          { path: 'add', component: AddProductComponent },
          { path: 'id:/edit', component: EditProductComponent },
        ],
      },

      // user
      {
        path: 'user',
        component: UserComponent,
        children: [
          { path: 'add', component: AddUserComponent },
          { path: 'id:/edit', component: EditUserComponent },
        ],
      },
      //
      { path: 'profile', component: GeneralComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // login
  { path: 'login', component: LoginComponent },

  // NO LAYOUT VIEW
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
