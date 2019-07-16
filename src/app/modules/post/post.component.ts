import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  id: string;
  sub:any;
  sub2:any;
  comments;
  post;
  
  constructor(private route: ActivatedRoute, private customerService: CustomersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.sub = this.customerService.getComments(this.id).subscribe( (res) => {
      this.comments = res;
    });

    this.sub2 = this.customerService.getPost(this.id).subscribe( (res) => {
      this.post = res;
    });

  }

}