// print commmon numbers from 2 given array 

p=[10,11,12,20,30]
q=[11,20,25,30,33] 

// o=[] 
// ispresent = false
// for(i=0 ; i<=p.length-1 ; i++){
//     for(j=0; j<=q.length-1 ; j++){
//         if(p[i]==q[j]){
//             o.push(p[i]);
//             ispresent=true
//         }
//     }
// }
// console.log(ispresent? o:'No common numbers'); 

// another method  

o=[] 
ispresent = false
for(i of p){
    for(j of q){
        if(i == j){
        o.push(i);
         ispresent=true
        }
    }
}
console.log(ispresent? o:'No common numbers'); 