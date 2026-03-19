a=[2,3,4,5]
// find pairs whose sum is 6 // (2,4)


found = false
for(i=0 ; i<=a.length-1 ; i++){
     for(j=i+1 ; j<=a.length-1 ; j++){
        if(a[i]+a[j]== 6){
           console.log(`(${a[i]},${a[j]})`);
           found = true
        }
     }
} 
!found && console.log('not present'); 






