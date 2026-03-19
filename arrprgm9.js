a = [12 , 41 , 6, 5, 22] 

// even numbers 

o= a.filter ((num)=>num % 2 == 0) 
console.log(o); 

// odd num 

p = a.filter((num)=>num%2 != 0)
console.log(p);

console.log('----------------------'); 

// is there any even num 

o = a.some((num)=>num%2 == 0)
console.log(o ? 'yes':'no'); 

console.log('----------------------'); 

o= a. find((num)=>num%2 == 0)
console.log(o);






