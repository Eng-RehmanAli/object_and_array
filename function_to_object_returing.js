function counter(){
    let counter=0;
    return{ // it is called the object and  the 
        add(){
            counter++;

             },
         sub(){
            counter--;

            },
    getvalue(){
         return counter;
    },
    stevalue(x){
      counter=x
    }

    }
}
let count=counter();
count.add();
count.add();
count.add();
count.add();
count.sub();
count.stevalue(34);
console.log(count.getvalue());
// console.log(count.counter);