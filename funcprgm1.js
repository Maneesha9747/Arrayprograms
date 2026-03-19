
// normal function
// function myFunc(){
//     let a = 10;
//     console.log(a);
// }
// myFunc() 

// Arrow function 

// myFunc = a => a 
// console.log(myFunc(20));

// normal 

// function myFunc1(a){
//     return a
// } 
// console.log(myFunc1(10));

// normal 

function myFunc1(){
    let a =10;
    myFunc2()
    return a;
    
}  

function myFunc2(){ 
   console.log('completed');
   
   
} 

function myFunc3(){
    let c = 20
    myFunc2()
    return c;
}  
console.log(myFunc1());
myFunc2();
myFunc3();





