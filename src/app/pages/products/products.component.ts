import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 
  constructor(private service:ServiceService) { }
  

  ngOnInit() {

  }
  getData(){
   return this.service.products;

  }



  addToCart(p:any){

  
     if(this.service.cart.hasOwnProperty(p.id)){
       this.service.cart[p.id]["quantity"]+=1;
     
    }else{
       this.service.cart[p.id] = {quantity:1,image:p.image,name:p.name,price:p.price,total:p.price,cost:p.cost,discount:p.discount};
       this.service.items.push(p.id);
       console.log(p.id)
      } 

  
  
  }

}
