 
 a=[1,2,3,4,5]// o/p = [2 ,3 , 4 , 3,4] 


sq = a.map((item)=>item**2)
console.log(sq);

// create a new array with num <=3 the incr by 1 else decr by 1 
// a=[1,2,3,4,5]// o/p = [2 ,3 , 4 , 3,4] 

arr = a.map((item)=>item<=3 ? item+1 : item -1)
console.log(arr); 
console.log(`------------------------------`); 

// highest  

highest = a.reduce((num1,num2)=> num1>num2 ? num1:num2 )
console.log(highest);


// lowest 

lowest= a.reduce((num1,num2)=>num1<num2 ? num1 :num2)
console.log(lowest);


// sum 

sum = a.reduce((num1,num2)=>num1+num2)
console.log(sum);



