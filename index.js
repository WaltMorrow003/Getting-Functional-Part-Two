//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE
console.log(customers)



/*
1. Oldest Customer

Write a function that will find the oldest customer 
and return their name.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?


*/


function oldestCustomer(array){
var ageComp = 0
var name;
for(var i=0; i<=array.lenght -1; i++){
  if(array[1].age >= ageComp){
    ageComp = arra[1].age
  }
}
return name
};



/*
2. Youngest Customer

Write a function that will find the youngest customer and return their name.


**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?

* What data type occupies each element of the 
customers array? What type of loop should be used 
then?

*/

function youngestCustomer(array){
var ageComp = 0
var name;
for(var i=0; i>=array.lenght -1; i++){
  if(array[1].age >= ageComp){
    ageComp = arra[1].age
  }
}
return name
};

