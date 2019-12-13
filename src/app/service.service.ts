import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  imgsrc1="https://rukminim1.flixcart.com/image/495/594/jyeq64w0/shirt/n/q/r/m-mcs018-billion-original-imafgnhfrgskhspm.jpeg?q=50"
  imgsrc2="https://rukminim1.flixcart.com/image/495/594/k2w6xe80/sweatshirt/m/t/e/5-6-years-abstcrgpl96764-allen-solly-original-imafm4kfpv8qe4mu.jpeg?q=50"
imgsrc3="https://rukminim1.flixcart.com/image/495/594/jmkwya80/kurti/x/h/4/l-c-9328-manushi-fashion-original-imaf9eg2jsdkffuw.jpeg?q=50"
imgsrc4="https://rukminim1.flixcart.com/image/612/612/perfume/9/u/y/eau-de-parfum-fogg-100-scent-bautyfull-secret-original-imaed5xhrz7vepvw.jpeg?q=70"

products=[
  {id:1,name:"men",image:this.imgsrc1},
  {id:1,name:"kids",image:this.imgsrc2},
  {id:1,name:"women",image:this.imgsrc3},
  {id:1,name:"women",image:this.imgsrc4},
  {id:1,name:"women",image:this.imgsrc1},
  {id:1,name:"women",image:this.imgsrc3}

]


  constructor() { }
}
