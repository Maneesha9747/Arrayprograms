//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name  

employee.forEach ((item)=>console.log(item[1])
)

console.log(`-------------------------------`);


//print total numbers of employee  

console.log(employee.length);

console.log(`-------------------------------------`);

//print developer employee details  

details=employee.filter((item)=>item[2]=='developer')
console.log(details);



console.log(`-----------------------------------------`);
   

//print employee name whose salary > 30000 

employee.filter((emp)=>emp[4]>30000).forEach((item)=>console.log(item[1])
)


console.log(`-------------------------`);

// print details of employee Laisha 

emp=employee.find((item)=>item[1]=='Laisha')
console.log(emp);



console.log(`-------------------------------`);


//arrange employee based on their salary in descending order 

highest = employee.sort ((emp1,emp2)=>emp2[4]-emp1[4])
console.log(highest);



console.log(`---------------------------------`);

//arrange employee based on their experience in ascending order 

exp = employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(exp);


console.log(`----------------------------------`);

// print the employ name whose have the higest salary

highest2 = employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(highest2[0][1]); 

console.log(`----------------------------------`);


// lowest salary  

lowest = employee.reduce((sal1,sal2)=>sal1[4]<sal2[4]?sal1:sal2)
console.log(lowest);


// total salary expense  

sum = employee.map((item)=>item[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(sum)





