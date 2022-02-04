import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private getData: PostService) { }
  ngOnInit() {
    this.getData.getPosts().subscribe((result) => {
      this.data = result;
    })
  }
}
