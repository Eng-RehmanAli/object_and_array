class A{
  constructor(brand,milgae){ /// construct is a keyword 
    this.brand=brand;
    this.milgae=milgae; 
    this.rheman="inans";
}
    showcasebrand(){
        console.log(this.rheman)
         return this.brand;
    }
    showcasemilgae(){
        return this.milgae
}

}
 
let one=new A();
console.log(one.showcasebrand());
console.log(one.showcasemilgae());
