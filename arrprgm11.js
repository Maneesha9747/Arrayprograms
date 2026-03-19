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


//Print employees from Kochi 

employee.filter((emp)=>emp[3]=='kochi').forEach((item)=>console.log(item[1])
) 

console.log(`-------------------------------------------------------`);

//Print names of employees with experience > 3 years 

employee.filter((emp)=>emp[5]>3).forEach((item)=>console.log(item[1])
) 

console.log(`-------------------------------------------------------`);

//Count number of testers  

count = employee.filter((emp)=> emp[2]=='tester' ).length
console.log(count);

console.log(`-------------------------------------------------------`);
//Find average salary
 
total = employee.map((item)=> item[4]).reduce((sum1,sum2)=>sum1+sum2)
avg = total/employee.length
console.log(avg); 

console.log(`-------------------------------------------------------`);

//Print highest paid developer 

highest = employee.filter((emp)=>emp[2]=='developer').reduce((num1,num2)=>num1[4]>num2[4]?num1:num2)
console.log(highest); 

console.log(`-------------------------------------------------------`);
 
//Print all QA employees in TVM 

employee.filter((emp)=> emp[2]=='QA' && emp[3]=='TVM').forEach((emp)=>console.log(emp))

//Group employees by designation 
//(developer, tester, QA) 



//Find second highest salary  

sort=employee.sort((emp1,emp2)=>emp2[4] - emp1[4])
console.log(sort[1]);


console.log(`-------------------------------------------------------`);
//Check if any employee has salary < 20000 

employee.filter((emp)=>emp[4]< 20000).forEach((item)=>console.log(item[1])
)
console.log(`-------------------------------------------------------`);

//Find most experienced employee 

exp=employee.reduce((emp1,emp2)=>emp1[5]>emp2[5] ? emp1:emp2 )
console.log(exp[1]);


