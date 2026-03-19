expense = [12000 ,5000 , 28000 ,10000, 6000] 

// find the least expense  - 5000  

// lowest = expense[0]
// for (exp of expense){
//     if(lowest>exp){
//         lowest = exp
//     }
// }
// console.log(lowest);



// highest expense - 28000  

highest = expense[0]
for (exp of expense){
    if(highest< exp ){
        highest = exp
    }
}
console.log(highest);



// total expense  

sum = 0 
for(exp of expense){
    sum= sum+exp
}
console.log(sum);
