// class A{
//      #x=10; // it must be declire in the  scopr explicitly instead  of  as like  local varibale 
//     x=40; //  it will not chnage the value because it is not  private   
//     #getste(){
//         return "i am rehman ali ";
//     }
//     gettake(){
//     console.log(this.#getste(),this.#x=90);
//     this.#x=60;// here  we can  change it in this case  
//     console.log(this.#getste(),this.#x);
//     }
// }
// let one=new A();
// one.gettake();
   /// syntax of the prototype function.prototype.property="any other ".number or any other tyes

// function Rabbit(type){
//    this.type=type;

// }
// // add a property in the Rabbit so  it  will be  added in the  function prototype function  
// Rabbit.prototype.hight="Long";
// Rabbit.prototype.teeth="small";

// let take=new Rabbit("simple");
// console.log(take.hight)
// console.log(take.teeth)



let mymap=new Map()
mymap.set("A1",4);
mymap.set("A3",4);
mymap.set("A4",4);
mymap.set(3,4);  // in the ,map  we can store the any typr of the key like number and other 
console.log(mymap.size)
console.log(mymap);
console.log(mymap.keys);
mymap.forEach((key,value)=>{
   console.log(key,value);
})