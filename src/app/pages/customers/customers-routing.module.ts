import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { DetailComponent } from 'src/app/detail/detail.component';


const routes: Routes = [
  {path: "", component: CustomersComponent},
  {path: ":id", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }


