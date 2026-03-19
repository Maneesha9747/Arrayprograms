 a = [4,5,6] 
// o/p = [11,10,9]

sum=0
o=[]
for(item of a){
    sum+=item
} 
// console.log(sum);

for(item of a){
    o.push(sum - item)
} 
console.log(o);


