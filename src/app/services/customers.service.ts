import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url: string = "https://jsonplaceholder.typicode.com/users/";
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentUrl = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) { 

  }

  getUser(id:number) {
    return this.http.get<customer>(this.url+id);
   
  }

  getUsers() {
    return this.http.get<customer[]>(this.url);
  }

  getPosts(id) {
    return this.http.get(this.postUrl + "?userId=" + id);
  }

  getPost(id) {
    return this.http.get(this.postUrl + "/" + id);
  }

  getComments(id) {
    return this.http.get(this.commentUrl + "?postId=" + id);
  }
}
