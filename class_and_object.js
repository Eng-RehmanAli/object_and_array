class KIA{
    Start(){
        console.log("The  engine is runing");
          console.log("Brnad is",this.brand);
    }
     Stop(){
        console.log("The  engine is  stop");
        console.log("Brnad is",this.brand);
    }
    stebarnd(brand){
        this.brand=brand
    }
}
// how to create the object for the by the class 
let one=new  KIA();
// ()  call the construter  of the class and constructer will run
// one.Start();
// one.Stop();
// one.stebarnd("KIA SPOtAGE");
//The  engine is runing
// The  engine is  stop
// Brnad is undefined 
// see the diference in the  both

one.Start();
one.stebarnd("KIA SPOtAGE");
one.Stop();
// The  engine is runing
// Brnad is undefined
// The  engine is  stop
// Brnad is KIA SPOtAGE
// it is compile line by line to the code  and brand it is  not running before the start()  