a = [10 , 20 , 30 ,20 , 30 , 40 , 50 , 60 , 10]
// find the duplicates 

o=[]
for(i=0; i<=a.length-1 ; i++){ //0<=8
    for (j=i+1 ; j<=a.length-1 ; j++){// 1<=8 
       if(a[i]==a[j]){
              o.push(a[i])
       } 
        
    }
}

console.log(o);
