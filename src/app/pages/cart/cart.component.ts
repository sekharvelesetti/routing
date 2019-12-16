import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title = 'sidebar';
  status =true;
 


// sekhars=[{name:"sekhar",price:220,count:1}]
// nam='';
// price:number;
// count:number;





//  myapp(){

//   //  this.status =!this.status;
//    this.sekhars.push({name:this.nam,price:this.price,count:this.count})

//    this.nam=null,
//    this.price=null,
//    this.count=null
   
//  }
   
  

  //  if(this.status===false){
  //    this.status=true
  //  }else{
  //    this.status=false
  //  }

 


 delete(){
   this.getitems().splice(1,1);
 } 
//   update(){
//     alert("Function could complete")
//  }

  constructor(private ser:ServiceService) { }

  ngOnInit() {
  }
  getitems(){
    return this.ser.items
  }

}
