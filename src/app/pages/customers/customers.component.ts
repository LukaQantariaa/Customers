import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from '../../services/customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  public sub;
  public customers;

  constructor(private customesrsService:CustomersService){

  }


  ngOnInit() {
    this.sub = this.customesrsService.getUsers().subscribe((res) =>{
      this.customers =  res;
    });
  }



  

  

}
