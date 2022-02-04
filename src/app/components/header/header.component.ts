import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartCount = 0;
  // count: BehaviorSubject<number>;
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.receiveCount().subscribe(() => {
      this.cartCount += 1;
    })
  }
}
