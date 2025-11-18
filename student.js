function student(){
    let marks=[]
    return{
        addmarks(m){
        marks.push(m);
        },
        avargeofmarks(){
            return marks.reduce((a,b)=>a+b)/2; //  remenber map filter and reduce keep the  function to operate it 
        },


    }
}
let stu=student();
stu.addmarks(34);
stu.addmarks(34);
stu.addmarks(34);
stu.addmarks(34);
stu.addmarks(34);
stu.addmarks(34);
stu.addmarks(34);
console.log(stu.avargeofmarks());