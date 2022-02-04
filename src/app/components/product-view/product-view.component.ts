import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from "src/app/post.service"

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  idData: any;
  value: any;

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.service.getPrductById(id).subscribe((result) => {
      this.idData = result;
    });
  }
  update() {
    let count = 0;
    this.value = count +1;
    this.service.updateCount(count);
  }
}
