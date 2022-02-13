import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Input() dataFromeparent: any;

  
  value:any;

  constructor(private counter: PostService) { }

  ngOnInit(): void {
  }
  update() {
    let count = 0;
    this.value = count +1;
    this.counter.updateCount(this.value);
  }

}
