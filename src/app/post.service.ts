import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  public subject = new Subject<number>();

  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get("https://fakestoreapi.com/products");
  }

  getPrductById(id: any) {
    return this.http.get("https://fakestoreapi.com/products/" + id);
  }

  updateCount(count: any) {
    this.subject.next(count);
  }
  receiveCount(): Observable<any> {
    return this.subject.asObservable();
  }
}
