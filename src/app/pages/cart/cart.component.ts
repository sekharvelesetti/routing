import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title = 'sidebar';
 count=0
 
items=[];
cart={};



  constructor(private ser:ServiceService) { }

  ngOnInit() {
    this.cart=this.ser.cart;
    this.items = this.ser.items;
   
  }
  delete(i: number){
    this.items.splice(i,1);
  } 
   q:number=0
   total(){
     this.q=0
     for (var val of this.ser.products) {
       this.q+=(val.price*val.quantity);
     
     

  }
 
}    
} 
