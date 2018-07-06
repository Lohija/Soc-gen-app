import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
id:number;
  constructor(private route : ActivatedRoute) { 
    this.id = +this.route.snapshot.params['id'];
    
  }

  ngOnInit() {
  }

}
