


class Bankacc{
    // for the private we use the # at the start of the variable
    static  #stating_account=1000;
    static #count=0;
    #nameof_holder;
    #accountNumber;
    #balance;
    constructor(nameof_holder,balance){
  this.#nameof_holder=nameof_holder;
  this.#balance=balance;
        Bankacc.#count++;
        this.#accountNumber=Bankacc.#stating_account++;
    }
     
    get getAccountnumber(){
     return this.#accountNumber; // this.#accountNumber++ because it is Nan due to any character will inclided and 
    // by the increment  it will make  the NAN 
    }
       static totalacc_show(){
      console.log("The total account in the banck is",Bankacc.#count);
      }
      Deposit(amount){
        if(typeof(amount)!=="number") throw new Error("The amount is not number please enter a number")
         if(amount<=0) throw new Error("The amoungt is not sufficient");
       this.balance=this.balance+amount;
         console.log(`your balance in the account is ${this.#balance}`);
        }
        Withdraw(amount){
            let result=0;
            if(typeof(amount)!=="number") throw new Error("The amount is  not a number");
            if(amount<=0) throw new Error("The amount is to much lesser and not valid ");
            if(amount>0 && amount>this.balance)throw new Error(`The amount is greater then  ${this.#balance}`)
            if(amount>0 && amount<this.balance){
          this.balance=this.balance-amount;
             console.log("Your balance reming is ", this.balance);
            }
            
            return   this.balance;
        }
        // Complaine(){
        //   let  user=prompt("Enter your Compliane");
        //   console.log(user);
        // }
        get Checkbalance(){
          return this.#balance;
        }
        totalaccount(){
          console.log(`The  Total acount in the Bank is ${Bankacc.#count}`);
        }
         name_and_accountnumber(){
          console.log(`The name of the user is ${this.#nameof_holder} and  Account number ${this.#accountNumber} `)
         }
         changeofaccountnumber(code_for){
              this.#accountNumber=code_for;
         }
         // gette and setter 
         get balance(){
          return this.#balance;
         }
         set balance(value){
            this.#balance=value;
         }
    
}
class Savingacc extends Bankacc{
    constructor(name,balance,interest){
        super(name,balance);
        this._interest=interest;
    }
    addinterst(){
      let result = (this.balance * this._interest) / 100;
        this.balance=this.balance+result;
    }
    set seinterest(value){
        this._interest=value; 
        console.log(`The interset is set by the  ${this._interest}`)
    }
    showblancewithinterest(){
      console.log(`The Balance of the  account is ${this.balance}`);
    }
}
class current_account extends Bankacc{
    constructor(name,balance,amount){
        super(name,balance);
        this.amount=amount;
    }
    }





let Saving=new Savingacc("Rehman Ali",32454235235,7);
Saving.addinterst();
Saving.seinterest=5;
Saving.showblancewithinterest();
Saving.changeofaccountnumber("p3078");
Saving.name_and_accountnumber();
console.log(Saving.Checkbalance)
Bankacc.totalacc_show(); //becsue the  static function is brlong to the class not from the object so  
// Saving.Complaine();
try{
Saving.Deposit(467);
Saving.Withdraw(10000);
Saving.Deposit(500);

}catch(error){
  console.log("The error is",error);
}
console.log(Saving.getAccountnumber)
Saving.totalaccount();
// the # use the getter and setter 

