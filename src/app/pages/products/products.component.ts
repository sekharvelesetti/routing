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
      
        this.service.items.push(p);
        this.service.items[p.id]["quantity"] = this.service.items[p.id]["quantity"]+1;
      //  this.service.items[p.id]["total"] = this.service.items[p.id]["quantity"]*p.price;
     
   
  }

}
