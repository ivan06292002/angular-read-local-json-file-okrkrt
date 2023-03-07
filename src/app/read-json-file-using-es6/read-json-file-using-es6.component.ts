import { Component, OnInit } from '@angular/core';
import products from "../../assets/products.json";

@Component({
  selector: 'app-read-json-file-using-es6',
  templateUrl: './read-json-file-using-es6.component.html',
  styleUrls: ['./read-json-file-using-es6.component.css']
})
export class ReadJsonFileUsingEs6Component implements OnInit {
productData: any;

  constructor() {
    this.productData = products;
  }

  ngOnInit() {
  
  }

}