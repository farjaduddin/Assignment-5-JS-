//                                       ASSIGNMENT#1 (alert)

// task 1
// alert("pleasure to have you on our website.")

// Task 2
// alert("Error! Please enter a valid password.")

// Task 3
// alert("Welcome to JS Land.. \n Happy Codding!")
// document.write("Welcome to JS Land <br/> Happy Codding!")

// Task 4
// alert("Welcome to JS land")
// alert("Happy Coding!")

// Task 5 done in console

//Task 6
// alert("Now 50% off on entire menu")








 
//                                             ASSIGNMENT#2
// Task 1
// var userName;
// Task 2
// var myName;
// myName = "Farjad Uddin"

// Task 3
// var message;
// message = "Hello World";
// alert(message);

// Task 4
// var stName = "Farjad Uddin"
// var stAge = 25;
// var stdesignation = "Certified Mobile Application Developer"
// alert(stName)
// alert(stAge + " year old")
// alert(stdesignation)

//Task 4 through array
// var studentData = ["Farjad Uddin","25 year old","Certified Mobile Application Developer"]
// for(var i = 0; i < studentData.length; i++){
    // alert(studentData[i]);
// }

// Task 5
// var dinner = prompt("Enter any name");
// for(var i = dinner.length; i >= 0; i--){

    // for(var j = 0; j < i ; j++){
        // document.write(dinner[j]);
    // }
    // document.write("<br>")
// }

// Task 6
// var email;
// email = "farjad994@gmail.com";
// alert("My email address is " + email);

// Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// Task 8
// document.write("I can, Thankyou sir Ali , Ghous and Basit");

// Task 9
// var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(string);
// document.write(string);






//                                   Assignmet#3

//                          Task 1
// var age = 25;
// alert("My age is " + age);

//                         Task 2
// var track = 20;
// alert("you have visited this site " + track + " times");

//                          Task 3
// var birthYear = 1994;
// document.write("I was born in " + birthYear + "<br>" + "Data Type of my deacleared variable is number");

//                            Task 4
// var visitorsName;
// var productTitle;
// var quantity;
// visitorsName = "John Doe";
// productTitle = "Jeans"
// quantity = 4;
// document.write(visitorsName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store")









//                                ASSIGNMENT 4
//                                Task 1
// var name, gender, age;

//                                Task 2


// legal variables
// var _billy, john, $sam, first_name, data2;
// illegal variables
// var @name, 2data, var, #age, variable! ;


//                                Task 3


// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("<p>Variable names can only contain numbers, $ and _.</p>")
// document.write("<p>Variables must begin with a letter , _ or $. For example $name, _name or name</p>")
// document.write("<p>Variable names are case sensitive.</p>")
// document.write("<p> Variable names should not be JS keywords.</p>")




//                                ASSIGNMENT 5


//                                Task 1
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);


//                                Task 2


// var num1 = +prompt("Enter first number");
// var operator = prompt("select operator i.e * / + - %")
// var num2 = +prompt("Enter second number");
// var result;
// if(operator === "*"){
//     var result = num1 * num2;
//     operator = "multiplication";
// }else if(operator === "/"){
//     result = num1 / num2;
//     operator = "division";
// }else if(operator === "+"){
//     result = num1 + num2;
//     operator = "addition";
// }else if(operator === "-"){
//     result = num1 - num2;
//     operator = "subtraction";
// }else if(operator === "%"){
//     result = num1 % num2;
//     operator = "remainder";
// }else{
//     alert("you did not select any of the above operator")
// }
// if(operator === "multiplication" || operator === "division" || operator === "addition" || operator === "subtraction" || operator === "remainder"){
//     document.write(operator + " of " + num1 + " and " + num2 + " is " + result);
// }


//                                Task 3


// var variable1;
// document.write("Value after variable declaration is: " + variable1 + "<br>");
// variable1 = 10;
// document.write("Initial value: " + variable1 + "<br>")
// variable1++;
// document.write("Value after increment is: " + variable1 + "<br>")
// variable1 = variable1 + 7;
// document.write("Value after addition is: " + variable1 + "<br>")
// variable1--;
// document.write("Value after decrement is: " + variable1 + "<br>")
// remainder = variable1 % 3;
// document.write("The remainder is : " + remainder + " when divided by 3 " + "<br>")

//                                Task 4


// var ticketCost = 600;
// ticketCost = ticketCost * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + ticketCost + "PKR")


//                                Task 5


// var number = +prompt("Enter the number for multiplication table")
// for(var i = 1; i<=10; i++){
//     if(typeof(number) == "number" ){
//     document.write(number + "*" + i + " = " + number*i + "<br>")
// }else{
//     alert("you did not type a number, try again");
//     var number = +prompt("Enter the number for multiplication table")
//     i--;
// }

// }


//                                Task 6


// var cond = +prompt("Celcius to Fahrenheit press 1 or Fahrenheit to Celcius press 2");
// var reslut;
// if(cond === 1 || cond === 2){
//     var temp = +prompt("Enter temperature")
    
//     if(cond === 1){
//         result = (temp * 9/5) + 32;
//         document.write(temp + "'C is " + result + "'F")
    
//     }else if(cond === 2){
//         result = (temp - 32) * 5/9;
//         document.write(temp + "'F is " + result + "'C")
//     }
// }else{
//     document.write("you didn't press 1 or 2")
// }


//                                Task 7


// var item1 = +prompt("Enter price of item 1");
// var quantityOfItem1 = +prompt("Enter quantity of item 1");
// var item2 = +prompt("Enter price of item 2");
// var quantityOfItem2 = +prompt("Enter quantity of item 2");
// var total1 = item1 * quantityOfItem1;
// var total2 = item2 * quantityOfItem2;
// var total = total1 + total2 + 100;
// document.write("Price of item 1 is " + item1 + "<br>" +
//                 "Quantity of item 1 is " + quantityOfItem1 + "<br>" +
//                 "Price of item 2 is " + item2 + "<br>" + 
//                 "Quantity of item 2 is " + quantityOfItem2 + "<br>" +
//                 "Shipping charges 100" + "<br>" + "<br>" +
//                 "Total cost of your order is " + total +"."
// )


//                                Task 8



// for(var i = 1; i>0; i--){
//     var marksObtained = +prompt("Enter marks obtained by student")
//     var totalMarks = +prompt("Enter total marks")
//     if(marksObtained <= totalMarks && totalMarks !== 0){
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("Marks obtained: " + marksObtained + "<br>" + "Total marks: " + totalMarks + "<br>" + "Percentage: " + percentage + "%")
// }else if(totalMarks === 0){
//     alert("total marks can not be zero, try again")
//     i++;

// }else{
//     alert("Obtained marks can not be greater than total marks, Try again")
//     i++;

// }
// }


//                                Task 9


// var USD = 10;
// var SR = 25;
// var PKR = (USD * 164.07) + (SR * 43.72); // date:09-06-2020 current rates of USD AND SAUDI RIAL
// document.write("<h1>Currency in PKR</h1>")
// document.write("Total currency in PKR: " + PKR)


//                                Task 10


// var number = 10;
// number = ((number + 5) * 5)/2;
// alert(number)


//                                Task 11


// var currentYear = 2020;
// var birthYear = +prompt("Enter your birth year")
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1>")
// document.write("Current year: " + currentYear +"<br>")
// document.write("Birth year: " + birthYear +"<br>")
// document.write("Your age: " + age + " or " + --age)



//                                Task 12


// var radius = +prompt("enter radius of the circle")
// var circumference = 2*3.142*radius;
// var area = 3.142*radius*radius;
// document.write("Radius of circle: " + radius + " units " + "<br>")
// document.write("The circumference is: " + circumference + " units " + "<br>")
// document.write("The area is: " + area + " units ")



//                                Task 13


// var snack = prompt("Enter your favourite snack you want to eat whole life")
// var cost = +prompt("how much it cost?")
// var quantity = +prompt("how many you eat in a day")
// var yourAge = +prompt("Enter your age")
// var maxAge = 80;
// var remainingAge = maxAge - yourAge;
// var perDayCost = cost * quantity;
// var lifeTimeCost = perDayCost * remainingAge * 365;
// var totalQuantity = remainingAge * 365 * quantity;
// //alert("Lifetime cost of your snack: " + lifeTimeCost)
// document.write("Favourite snack: " + snack +"<br>" +
//                "Current age: " + yourAge +"<br>" +
//                "Estimated remaining age: " + remainingAge + " years" + "<br>" +
//                "Amount of snack per day: " + quantity +"<br>" +
//                "You need " + totalQuantity + " " + snack + " to last you until the ripe old age of " + maxAge +"<br>" +
//                "Total cost: " + lifeTimeCost + "PKR for " + totalQuantity + " " + snack +"<br>"
// )





//                                ASSIGNMENT 6


//                                Task 1


// var a = 15;
// document.write("Result:" + "<br>")
// document.write("The value of a is: " + a + "<br>")
// document.write("...................................." + "<br>" + "<br>")
// document.write("The value of ++a is: " + ++a + "<br>")
// document.write("The value of a is: " + a + "<br>" + "<br>")
// document.write("The value of a++ is: " + a++ + "<br>")
// document.write("The value of a is: " + a + "<br>" + "<br>")
// document.write("The value of --a is: " + --a + "<br>")
// document.write("The value of a is: " + a + "<br>" + "<br>")
// document.write("The value of a-- is: " + a-- + "<br>")
// document.write("The value of a is: " + a + "<br>")


//                                Task 2


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// //             1 -   0 +  1  + 1  = 3
// document.write("a is: " + a + "<br>")
// document.write("b is: " + b + "<br>")
// document.write("Result is: " + result)


//                                Task 3


// var name = prompt("Enter your name please")
// alert("Welcome to our website dear " + name)


//                                Task 5


// var num = +prompt("Enter a number to print a table")
// var quantity = +prompt("How many lines do you want to print?")
// if(quantity === 0){
//     quantity = 10;
// }
// for(var i = 1; i <= quantity ; i++){
//     if(num !== 0){
//         document.write(num + " * " + i + " = " + " " + num*i + "<br>") 
//     }else if(num === 0){
//         num = 5;
//         document.write(num + " * " + i + " = " + " " + num*i + "<br>")
//     }
// }


//                                Task 6


// var totalMarks;
// var obtainedMarks;
// for(var i =1 ; i <= 3 ; i++){
// var tbl = document.getElementById("table1");
// var row = tbl.insertRow()
// var cell1 = row.insertCell()
// var cell2 = row.insertCell()
// var cell3 = row.insertCell()
// var cell4 = row.insertCell()
// cell1.innerHTML = prompt("Enter subject " + i + " name")
// cell2.innerHTML = +prompt("Enter subject " + i + " total marks")
// totalMarks += cell2;
// cell3.innerHTML = +prompt("Enter subject " + i + " obtained marks")
// obtainedMarks += cell3;
// var percentage = (cell3/cell2*100;
// alert(percentage)
// cell4.innerHTML = percentage; 

// }


//                            ASSIGNMENT # 9-11
//                                Task 1


// var cityName = prompt("Enter city name")
// cityName = cityName.toLowerCase()
// if(cityName === "karachi"){
//     alert("Welcome to city of lights")
// }




//                                Task 2

// for(var i = 0; i<1 ; i++){
// var gender = prompt("Enter your gender, male or female")
// gender = gender.toLowerCase()
// if(gender === "male"){
//     alert("Good Morning Sir.")
// }else if(gender === "female"){
//     alert("Good Morning Ma’am.")
// }else{
//     alert("You didn't type male or female, try again")
//     i--
// }
// }



//                                Task 3

// for(var i = 0; i<1 ; i++){
// var color = prompt("Enter traffic signal color from (RED, YELLOW, GREEN)")
// color = color.toLowerCase()
// if(color === "red"){
//     alert("Must stop")   
// }else if(color === "green"){
//     alert("Move now")   
// }else if(color === "yellow"){
//     alert("Ready to move")   
// }else{
//     alert("You didn't type from the given option, try again")
//     i--;   
// }
// }

//                                Task 4


// var fuel = +prompt("Enter remaining fuel in litres")
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("you have enough fuel to reach your destination")
// }



//                                Task 5

//                      a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


//                      b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


//                      c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


//                      d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


//                     e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


//                                Task 6


// for(var i = 0; i<1 ; i++){
// var subj1Marks = +prompt("Enter marks obtained in subject 1")
// var subj2Marks = +prompt("Enter marks obtained in subject 2")
// var subj3Marks = +prompt("Enter marks obtained in subject 3")
// var maxMarks = +prompt("Enter total marks of 3 subjects")
// var marksObtained = subj1Marks+subj2Marks+subj3Marks;
// if(maxMarks >= marksObtained ){
// var percentage = (marksObtained/maxMarks)*100;
// document.write("<h1>Marks Sheet</h1>" + "<br>")
// document.write("Total marks: " + maxMarks  + ". <br>")
// document.write("Obtained marks: " + marksObtained  + ". <br>")
// document.write("Percentage: " + percentage.toFixed(2)  + "% . <br>")
// if(percentage >= 80){
//     document.write("Grade: " + "A-One" + "<br>")
//     document.write("Remarks: " + "Excellent" + "<br>")

// }else if(percentage >= 70){
//     document.write("Grade: " + "A" + "<br>")
//     document.write("Remarks: " + "Good" + "<br>")
// }else if(percentage >= 60){
//     document.write("Grade: " + "B" + "<br>")
//     document.write("Remarks: " + "You need to improve" + "<br>")
// }else if(percentage < 60){
//     document.write("Grade: " + "Fail" + "<br>")
//     document.write("Remarks: " + "Sorry" + "<br>")
// }
// }else{
//     alert("obtained marks can't be greater than total marks, try again")
//     i--;

// }
// }

//                                Task 7

// var rand = Math.floor(Math.random()*10) + 1
// rand1 = rand--;
// for(var i = 0; i<1 ; i++){
// var guess = +prompt("Guess the secret number from 1 to 10")
// if(guess === rand1){
//     alert("Bingo! Correct answer")
//     alert("Refresh the page for a new number to guess")
// }else if(guess === rand){
//     alert("Close enough to the correct answer, try again")
//     i--;
// }else{
//     alert("You are not even close, try again")
//     i--
// }
// }



//                                Task 8


// var number = +prompt("Enter a number")
// var remainder = number % 3;
// if(remainder === 0){
//     alert("Given number is divisible by 3")
// }else{
//     alert("Given number is not divisible by 3")
// }




//                                Task 9


// var number = +prompt("Enter a number")
// var remainder = number % 2;
// if(remainder === 0){
//     alert("Given number is an even number")
// }else{
//     alert("Given number is an odd number")
// }




//                                Task 10


// var temp = +prompt("Enter temperature in celcius")
// if(temp > 40){
//     alert("It is too hot outside.")
// }else if(temp > 30){
//     alert("The Weather today is Normal.")
// }else if(temp > 20){
//     alert("Today’s Weather is cool.")
// }else if(temp < 20){
//     alert("OMG! Today’s weather is so Cool.")
// }




//                                Task 11


// var num1 = +prompt("Enter first number")
// var operator = prompt("Enter operator like <br> + - * / or %")
// var num2 = +prompt("Enter second number")
// if(operator === "-"){
//     alert(num1 - num2)
// }else if(operator === "+"){
//     alert(num1 + num2)
// }else if(operator === "*"){
//     alert(num1 * num2)
// }
// else if(operator === "/"){
//     alert(num1 / num2)
// }
// else if(operator === "%"){
//     alert(num1 % num2)
// }




//                            ASSIGNMENT # 12-13

//                                Task 1


// var input = prompt("Enter any character or number")
// if(input === 65){
//     alert("its working")
// }




//                                Task 2


// var int1 = +prompt("Enter an integer")
// var int2 = +prompt("Enter another integer")
// if(int1 > int2){
//     alert(int1 + " is greater than " + int2)
// }else if(int1 < int2){
//     alert(int2 + " is greater than " + int1)
// }else if(int1 === int2){
//     alert(int1 + " is equal to " + int2)
// }



//                                Task 3


// var num = +prompt("Enter a number")
// if(num > 0){
//     alert("Positive")
// }else if(num < 0){
//     alert("Negative")
// }else{
//     alert("zero")
// }



//                                Task 4


// var input = prompt("Enter a letter")
// if(input === "a" || input === "e" || input === "i" || input === "o" || input === "u"){
//     alert("True")
// }else{
//     alert("False")
// }




//                                Task 5


// var password = "xyz12345"
// var inputPassword = prompt("Enter your password")
// if(inputPassword === password){
//     alert("“Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect password")
// }




//                                Task 6


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }else{
// greeting = "Good evening";
// }




//                                Task 7


// var greeting;
// var time = prompt("What time is it now? use 00:00 to 23:59 format");
// if (time >= "00:00" && time < "12:00" ) {
// greeting = "Good morning!";
// alert(greeting)
// }else if( time >= "12:00"  &&  time < "17:00"){
// greeting = "Good afternoon!";
// alert(greeting)
// }else if( time >= "17:00"  &&  time < "21:00"){
//     greeting = "Good evening!";
//     alert(greeting)
//     }else if( time >= "21:00"  &&  time < "23:59"){
//         greeting = "Good night!";
//         alert(greeting)
//         }





//                            ASSIGNMENT # 13-15

//                                Task 1

// var studentNames = [];

//                                Task 2

// var studentNames = new Array();


//                                Task 3


// var string = ["name", "gender", "designation"]


//                                Task 4


// var number = [12, 24, 36, 48]



//                                Task 5


// var bool = [true, false, true, false]


//                                Task 6


// var mixed = ["string1",12,32,54,"string2",true ,"string3", false,12,33,65]



//                                Task 7


// var availableEducationQualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<h1>Qualifications:</h1>")
// var count=1;
// for(var i =0; i< availableEducationQualifications.length; i++){
//     document.write(count +") " + availableEducationQualifications[i] + "<br>")
//     count++;
// }


//                                Task 8


// var stName = ["bilal", "rohan", "arsalan"]
// var stScore = [344, 432, 322]
// for(var i = 0; i < stName.length ; i++){
//     document.write("Score of " + stName[i] + " is " + stScore[i] + ". Percentage: " + (stScore[i]/500)*100 + "%" + "<br>")
// }



//                                Task 9


// var color = ["red", "green", "blue"]
// alert(color)
// document.write(color + "<br>")
// var newColor = prompt("Enter new color to add at the beginning")
// color.unshift(newColor)
// alert(color)
// document.write(color + "<br>")
// newColor = prompt("Enter new color to add at the end of array")
// color.push(newColor)
// alert(color)
// document.write(color + "<br>")
// color.unshift("brown","purple")
// alert(color)
// document.write(color + "<br>")
// color.shift()
// alert(color)
// document.write(color + "<br>")
// color.pop()
// alert(color)
// var newColor = prompt("Enter new color to add at your desired position")
// var position = prompt("enter the desired position like 1 , 2 , 3 , etc to place your colour")
// color.splice(position-1,0,newColor)
// alert(color)
// document.write(color + "<br>")
// var quantity = prompt("How many colors do you want to delete?")
// var position = prompt("Tell me the position from whare you want to start deleting colors")
// color.splice(position-1,quantity)
// alert(color)
// document.write(color + "<br>")



//                                Task 10


// var quantity = +prompt("how many scores do you want to add")
// var scores = []
// var add;
// for(var i = 0 ; i < quantity ; i++){
//     add = +prompt("Enter scores")
//     scores.push(add)
// }
// document.write("Scores of Students: " + scores + "<br>")
// scores.sort();
// document.write("Ordered Scores of Students: " + scores + "<br>")



//                                Task 11


// var cities = ["Karachi","Islamabad","Quetta","peshawar","Lahore","Multan"]
// document.write("Cities list:" + "<br>" + cities + "<br>" + "<br>")
// selectedCities = cities.slice(1,4)
// document.write("Selected Cities list:" + "<br>" + selectedCities + "<br>")



//                                Task 12


// var arr = ["This" , " is ", " my ", " cat"];
// var string = arr.join(" ")
// document.write("Array: <br>" + arr + "<br>")
// document.write("String: <br>" + string)


//                                Task 13


// var arr = []

// for(var i = 0 ; i<5 ; i++){
//     arr.push(prompt("Enter your devices"));
// }
// document.write("Devices: " + "<br>" + arr + "<br>" + "<br>")

// var print;
// for(var i = 0; i<5 ; i++){
//     print = arr.shift()
//     document.write("Out:" + "<br>")
//     document.write(print + "<br>")
// }



//                                Task 14


// var arr = []

// for(var i = 0 ; i<5 ; i++){
//     arr.push(prompt("Enter your devices"));
// }
// document.write("Devices: " + "<br>" + arr + "<br>" + "<br>")

// var print;
// for(var i = 0; i<5 ; i++){
//     print = arr.pop()
//     document.write("Out:" + "<br>")
//     document.write(print + "<br>")
// }
 


//                                Task 15


// var brands = ["Apple" , "Samsung","Huawei" , "Motorola" , "Nokia" , "Sony"]
// document.write("<select>")
// for(var i = 0 ; i < brands.length ; i++){
//     document.write("<option>"+ brands[i] +"</option>")
// }
// document.write("</select>")


//                            ASSIGNMENT # 17-20

//                                Task 1


// var twoD = [
//     [],
//     [],
//     []
// ]




//                                Task 2


// var twoD = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// var count = 1;
// for(var i = 0; i < twoD.length ; i++){
// document.write(twoD.slice(i,count) + "<br>")
// count++;
// }



//                                Task 3


// for(var i = 1 ; i <= 10 ; i++){
//     document.write(i + "<br>")
// }



//                                Task 4


// var num = +prompt("Enter a number to show its multiplication table")
// var count = +prompt("Enter length of multiplication table")
// for(var i = 1 ; i <= count ; i++){
//     document.write(num + " * " + i + " = " + " " + num*i + "<br>")
// }



//                                Task 5


// fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for( var i = 0 ; i < fruits.length ; i++){
//     document.write(fruits[i] + "<br>")
// }
// for( var i = 0 ; i < fruits.length ; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }



//                                Task 6

// document.write("Counting: ")
// for(var i = 1 ; i <= 15 ; i++){
//     document.write(i + ", ")
// }

// document.write("<br> <br> Reverse Counting: ")
// for(var i = 10 ; i > 0 ; i--){
//     document.write(i + ", ")
// }
// document.write("<br> <br> Even numbers: ")
// for(var i = 0 ; i < 21 ; i = i+2){
//     document.write(i + ", ")
// }
// document.write("<br> <br> Odd numbers: ")
// for(var i = 1 ; i < 21 ; i = i+2){
//     document.write(i + ", ")
// }
// document.write("<br> <br> Series: ")
// for(var i = 2 ; i < 21 ; i = i+2){
//     document.write(i + "k" + ", ")
// }



//                                Task 7


// var check = prompt("Enter what do you want to check")
// check = check.toLowerCase()
// var refreshment = ["cake", "apple pie", "cookie", "chips", "patties"]
// var statement = "false";
// for(var i = 0 ; i < refreshment.length ; i++){
//     if(check === refreshment[i]){
//         document.write(check + " is available at index " + i +" in our bakery")
//         statement = "true";
//         break;
//     }
// }
// if(statement === "false"){
//     document.write("Sorry " + check + " is not available in our bakery")

// }




//                                Task 8


// var A = [24, 53, 78, 91, 12,]
// document.write("Array items: " + A + "<br>")
// A = A.sort()
// document.write("The largest number is "+ A[A.length - 1])



//                                Task 9


// var A = [24, 53, 78, 91, 12,]
// document.write("Array items: " + A + "<br>")
// A = A.sort()
// document.write("The smallest number is "+ A[0])




//                                Task 10


// for(var i = 1 ; i < 21 ; i++){
//     document.write( i*5 +", ")
// }




// var word = "farjad"
// var split = word.split("").reverse().join()

// alert(word)
// alert(split)