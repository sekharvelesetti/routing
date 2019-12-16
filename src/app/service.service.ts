import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  imgsrc1="https://rukminim1.flixcart.com/image/495/594/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=50"
  imgsrc2="https://rukminim1.flixcart.com/image/495/594/jxgflow0/t-shirt/y/h/g/xl-tnvgyvnful-d22-tripr-original-imafhuq3kzykngbf.jpeg?q=50"
imgsrc3="https://rukminim1.flixcart.com/image/495/594/jmkwya80/kurti/x/h/4/l-c-9328-manushi-fashion-original-imaf9eg2jsdkffuw.jpeg?q=50"
imgsrc4="https://rukminim1.flixcart.com/image/495/594/jy0frm80/t-shirt/v/m/m/xxl-mfk-7138-h-mufti-original-imafgc69yz3rwfch.jpeg?q=50"
imgsrc5="assets/fog.jpeg"
imgsrc6=""
products=[
  {id:1,name:"Watchs",price:220,image:this.imgsrc1,quantity:1},
  {id:2,name:"kids",price:500,image:this.imgsrc2,quantity:1},
  {id:3,name:"women",price:400,image:this.imgsrc3,quantity:1},
  {id:4,name:"women",price:200,image:this.imgsrc4,quantity:1},
  {id:5,name:"women",price:150,image:this.imgsrc1,quantity:1},
  {id:6,name:"perfume",price:100,image:this.imgsrc5,quantity:1},
  {id:5,name:"women",price:150,image:this.imgsrc1,quantity:1},
  {id:6,name:"perfume",price:100,image:this.imgsrc5,quantity:1}

]
items=[]

  constructor() { }
 
}

