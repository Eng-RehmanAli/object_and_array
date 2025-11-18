const empoly={
    caltax(){
        console.log("your tax is  10%")
        
    }
}


const  Rehman={
     salary:59999,
     caltax(){
    console.log("Your tax rate is hight ")
     }

}

const  shazad={
     salary:59999,
     caltax(){
    console.log("Your tax rate is hight ")
     }

}
Rehman.__proto__=empoly;
Rehman.caltax();
shazad.__proto__=empoly;
shazad.caltax(); // in this cae both have  the same function so the owner properties have the greater periorty
// so in that case the shazad has the fucntion so it will take it 
