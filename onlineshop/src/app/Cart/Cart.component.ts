import { CartService } from './../Cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {

  items =[];

  constructor(
    private cartservice: CartService,
  ) { }

  ngOnInit() {
    this.items = this.cartservice.getItems();
  }

  clearCart(){
    this.items.length = 0;
  }

  buyItems(){
    alert("You order is received");
    this.items.length = 0;
  }

}
