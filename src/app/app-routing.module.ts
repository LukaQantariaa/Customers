import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path: "", redirectTo: "customers", pathMatch: "full"},
  {path: "customers", loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)},
  {path: "orders", loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)},
  {path: "about", loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)},
  {path: "post/:id", loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
