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
imgsrc6="https://rukminim1.flixcart.com/image/495/594/shirt/g/d/c/hlsh009033-dark-blue-light-blue-highlander-xl-original-imaezvezywu4agzh.jpeg?q=50"
imgsrc7="https://rukminim1.flixcart.com/image/495/594/k2m6ufk0/sandal/r/b/p/ss0119g-7-sparx-blackgrey-original-imafhxn5yf2dfsdj.jpeg?q=50"
imgsrc8="https://rukminim1.flixcart.com/image/495/594/jufu4y80/wallet-card-wallet/2/d/u/swp14514-swp14514-wallet-hidelink-original-imaffkj7ebhs8xwx.jpeg?q=50"
products=[
  {id:1,name:"hooded tshirts",price:2200,image:this.imgsrc1,quantity:1,dis:80,discount:20/100,cost:440},
  {id:2,name:"v-neck tshirts",price:5000,image:this.imgsrc2,quantity:1,dis:20,discount:80/100,cost:4000},
  {id:3,name:"women wear",price:4000,image:this.imgsrc3,quantity:1,dis:60,discount:40/100,cost:1600},
  {id:4,name:"round neck tshirts",price:2000,image:this.imgsrc4,quantity:1,dis:66,discount:34/100,cost:680},
  {id:5,name:"shirts",price:1500,image:this.imgsrc6,quantity:5,dis:76,discount:24/100,cost:360},
  {id:6,name:"perfume",price:1000,image:this.imgsrc5,quantity:1,dis:66,discount:34/100,cost:340},
  {id:7,name:"slipers&flotters",price:1500,image:this.imgsrc7,quantity:1,dis:48,discount:52/100,cost:780},
  {id:8,name:"wallets",price:1000,image:this.imgsrc8,quantity:1,dis:30,discount:70/100,cost:700}

]
items=[];
cart={};
// item={}

  constructor() { }
 
}

