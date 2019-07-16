import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  public sub;
  public id ;
  public customer;

  public sub2;
  public posts;

  constructor(private route: ActivatedRoute, private customesrsService:CustomersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.sub = this.customesrsService.getUser(this.id).subscribe((res) =>{
      this.customer =  res;
    });

    this.sub2 = this.customesrsService.getPosts(this.id).subscribe( (res) => {
      this.posts = res;
    });

   
  }

}
