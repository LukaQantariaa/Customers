import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { DetailComponent } from 'src/app/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CustomersComponent,
    DetailComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule
  ]
})
export class CustomersModule { }
