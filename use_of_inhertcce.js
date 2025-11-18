class Parent{
    constructor(name){
           console.log("The case of the parent is");
         this.name=name;
    
}
   work(){
    console.log("This is a working case");

   }
   eat(){
    console.log("I am eacting the charga");
   }
}
class engeenier extends Parent{
    constructor(name){
        super(name);
        console.log("The case of the child is");
        this.name=name;
    }
    shedule(){
        super.eat();
        console.log("The shedule is that ");
    }
}
let one=new engeenier("Rehman ALi");
one.shedule();