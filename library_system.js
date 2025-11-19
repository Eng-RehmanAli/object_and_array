class Book{
    #title
    #author
    #price
    constructor(title,author,price){
          this.#title=title;
        this.#author=author;
        this.#price=price;
    }
    set price(value){
       if(value<0)throw new Error("The price can not be  negative");
      if(value>=0){
         this.#price=value;
      }
    }
    get price(){
        return this.#price;
    }
    get title(){
        return this.#title;
    }
    get author(){
        return this.#author
    }
    getDetails(){
        console.log(`The name of the tittle ${this.#title} and the author ${this.#author} and  the price is ${this.#price}`)
    }
    
}
class Ebook extends Book{
    #fillesize;
    constructor(title,author,price,fillesize){
         super(title,author,price);
         this.#fillesize=fillesize;
    }
    set fillesize(value){
    if(value<0)throw new  Error("The filesoze of  the  canot can be negative")
         this.#fillesize=value
    }
    get fillesize(){
        return this.#fillesize;
    }
    getDetails(){// for the next line simple put the  next line in the template literal line 
         console.log(`The name of the tittle ${this.title}
             and the author ${this.author} and 
             the price is ${this.price} and
             sizw of the file is ${this.fillesize}`)
    }
}

class printbook extends Book{
    #wight
    constructor(title,author,price,wight){
         super(title,author,price);
         this.#wight=wight;
    }
     set wight(vale){
         if(vale<0) throw new Error("The wight can not be negative");
           this.#wight=vale;
     }
     get wight(){
        return this.#wight;
     }
     getDetails(){
        console.log(`THE titla is ${this.title}
            the author ${this.author} 
            the wight of the book ${this.wight}
            the price is ${this.price}`)
     }
}
let one =new Ebook("Rehman LIfe","DR.zeenat",234532,"23MB");
one.getDetails();
one.fillesize="34MB";
one.getDetails();
let  two=new Ebook("Zeeshna,S life ","DR.Muqdas",234723,"45MB");
two.getDetails();


let first=new printbook("Zaman ALI","Dr.Asma",23423,"32gm");
try{
    first.wight="345gm";
}catch(error){
    console.log(error);
}
first.getDetails();


