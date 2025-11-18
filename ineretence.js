class Person{
     study(){
        console.log(" is studging correctly and it will do something");
        
     }
         sleep(){
        console.log(" is sleep correctly and it will do something");
        
     }
       work(){
        console.log(" is Work is going properly ");
    }
}
class  engeenier extends Person{
    work(){
        console.log("Work is going properly ");
    }
}
let one=new engeenier();
one.work();
one.sleep();
one.study(); /// for the inhertnece we use the extends 