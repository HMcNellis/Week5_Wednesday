// 1.  Log your last name to the console.
console.log('Question 1');
var name = 'McNellis';
console.log(name);
// 2.  Declare a variable called "movie" and log it to the console.
console.log('Question 2');
var movie = 'movie name'
console.log(movie);
// 3.  Declare three variables with integer values. Add the first two, then multiply that sum by the third.
console.log('Question 3');
var one = 3;
var two = 6;
var three = 2;
console.log((one + two) * three);
// 4.  Declare two variable with string values. Declare a third varible that concatenates the first two.
console.log('Question 4');
var greeting = 'hello';
var name = 'Hanni';
console.log(greeting + ' ' + name + '!');
// 5.  Prompt a user to enter a number. Multiply that by 100.
// console.log('Question 5');
// var number = prompt('enter number');
// console.log(number * 100);
// 6.  Prompt a user to enter his/her name, favorite band, and the year they were born. Log the sentence:
//     "My name is ______, and I'm ___ year old fan of ________."
// console.log('Question 6');
// var name = prompt('What\'s your name?');
// var band = prompt('What\'s your favorite band?');
// var year = prompt('What year were you born?');
// var current = new Date().getFullYear()
// var age = current - year;
// console.log('My name is ' + name + ', and I\'m a ' + age + ' year old fan of ' + band + '.')
// 7.  Create an alert that uses the response from a prompt.
// console.log('Question 7');
// var name = prompt('What\'s your name?');
// alert('Hi ' + name);
// 8.  Declare an array with six items. Do this two different ways.
console.log('Question 8');
var fruit = ['apples', 'oranges', 'bananas', 'kiwi', 'grapes', 'watermelon'];
var fruitTwo = {
  fruitType: ['apples', 'oranges', 'bananas', 'kiwi', 'grapes', 'watermelon']
}
console.log(fruit);
console.log(fruitTwo['fruitType']);
// 9.  Add two additional items to the beginning of the array.
console.log('Question 9');
fruit.unshift('cherry', 'honeydew');
console.log(fruit);
// 10. Remove the last two items.
console.log('Question 10');
fruit.splice(6, 2);
console.log(fruit);
// 11. Add one item between the 2nd and 3rd item.
console.log('Question 11');
fruit.splice(2, 0, 'blueberry');
console.log(fruit);
// 12. Combine all of the elements of the array into a string.
console.log('Question 12');
var list = fruit.toString();
console.log(list);
// 13. Arrange the items alphabetically.
console.log('Question 13');
var order = fruit.sort();
console.log(order);
// 14. Create and array of three arrays: colors, names, and schools. Each inner array should have three items.
console.log('Question 14');
var info = [['orange', 'red', 'blue'], ['sam', 'sue', 'bob'], ['bennett', 'blevins', 'rocky']]
console.log(info[0][0]);
// 15. Remove the last item from the second array.
console.log('Question 15');
console.log(info[1].pop());
// 16. Declare an object called "car" that describes the make, model, and color of your car.
console.log('Question 16');
var car = {
  make: 'Kia',
  model: 'Sportage',
  color: 'silver'
};
// 17. To the car object, add the key/value pair describing the year of your car.
console.log('Question 17');
car.year = '2001';
console.log(car);
// 18. The the car object, add a "repairs" key with the value being an array of the last three items you fixed on the car.
console.log('Question 18');
car.repairs = ['brakes', 'tires', 'timing belt'];
console.log(car);
// Use the following object for questions 19-25:
guests = {
  "joe": {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: "sue",
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue":{
    first_name: "Sue",
    last_name: "Summers",
    preferences: {
      meal: "fish",
      favorite_genres: ["funk", "blues"],
    },
    sitting_next_to: "joe",
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
}

// 19. Find Joe's last name.
console.log('Question 19');
console.log(guests['joe']['last_name']);
// 20. Log to the console the first genre each person listed.
console.log('Question 20');
console.log(guests['joe']['preferences']['favorite_genres'][0], guests['sue']['preferences']['favorite_genres'][0]);
// 21. Find the first name of the person sitting next to Joe.
console.log('Question 21');
console.log(guests['joe']['sitting_next_to']);
// 22. Find what meal Sue will be eating.
console.log('Question 22');
console.log(guests['sue']['preferences']['meal']);
// 23. Find the date of the first correspondence with Joe.
console.log('Question 23');
console.log(guests['joe']['correspondence'][0]['date']);
// 24. find the desciption of the last correspondence with Sue.
console.log('Question 24');
console.log(guests['sue']['correspondence'][1]['description']);
// 25. Create a string uses variables to read:
//     "As of [date of Joe's last correspondence], [Joe's first name] [Joe's last correspondence description].
//      He will be eating [Joe's meal choice] while listening to [Joe's first favorite genre] and [Joe's second favorite genre]
//      and sitting next to [Sue's first name][Sue's last name]."
console.log('Question 25');
var jDate = guests['joe']['correspondence'][1]['date'];
var jName = guests['joe']['first_name'];
var jCLast = guests['joe']['correspondence'][1]['description'];
var jMeal = guests['joe']['preferences']['meal'];
var jMusic = guests['joe']['preferences']['favorite_genres'][0];
var jMusic2 = guests['joe']['preferences']['favorite_genres'][1];
var sName = guests['sue']['first_name'];
var sLast = guests['sue']['last_name'];
console.log('As of ' + jDate + ', ' + jName + ' ' +jCLast + '. He will be eating ' + jMeal + ' while listening to ' + jMusic + ' and ' + jMusic2 + ' and sitting next to ' + sName + ' ' + sLast + '.');
// 26. Create an object with both Literal Notation and Constructor.
console.log('Question 26');
var car = {
  make: 'Kia',
  model: 'Sportage',
  color: 'silver'
};

var car = new Object();
car.make = 'Kia';
car.model = 'Sportage';
car.color = 'silver';
// 27. Output each item in the following Array to your console:
console.log('Question 27');
var bedroom = ['bed', 'nightstand', 'television', 'Channing Tatum']
console.log(bedroom.toString());
// 28. Log to the console numbers 25 to 85, only in increments of 15.
console.log('Question 28');

for(i=25; i<=85; i += 15) {  

  console.log(i);
}
// 29. Write a while loop that logs "This loop is number: ___" to the console 5 times. Use your counter to fill in the blank.
// 30. Use a for loop to rewrite #29.
// 31. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// 32. Use Math.floor and Math.random to roll two six sided dice for two players. Determine which player wins with the higher roll.
// 33. Define a function called "divideByThree". It should accept one parameter called "number".
//     The function should divide the number by three and output the answer.
//     If the number is not divisible by three with a remainder of zero, alert the user that their number is invalid.
// 34. Write a function that accepts the following array and separates the people into men and women.
//     HINT: The men are even and the women are odd.
       battingLineUp= ["Henry", "Shirley", "Mark", "Tina", "Max", "Sara", "Eric", "Lisa", "Ralph", "Connie", "Drew"]
// 35. Prompt a user to enter their phone number. Write a function that outputs their phone number in a pretty format like:
//     (555) 883-3985
//     Alert the user if they have entered anything except a 10 digit number.
// 36. Write a helpufl tipping function that accepts two parameters, the bill amount and service score based on a scale of 1-10.
//     The output should be the bill, the tip, and the total amount.
//     Service score 1-3 denotes a 10% tip. 4-6 = 15%, 7-9 = 20%, 10 = 50%.
// 37. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
       arrayOfSchtuff = ["four", 55, {myDog: "Scranton"}, "fifty-one", 21, 398577729, "3,333"]
// 38. Use a function to ask a user for a US Dollar amount and converts it to Canadian Dollars.
// 39. Add the option of converting to Euros. First ask the user which currency they want the conversion for, then ask for the dollar amount.
// 40. Write a function that returns an object of duplicate letters in an string.
//     "Baby Aaron" should return {"b":2, "a":3}
// BONUS: Write a function named pluralize that takes 2 arguments, a noun and a number. It returns the number and pluralized form, like "5 cats" or "1 dog".
//        Make it handle a few collective nouns like "sheep" and "geese"
//
// =========================== jQuery =========================
// 41. Add the jQuery CDN script to index.html
//$(document).ready(function(){

// 42. Turn the square into a circle.

// 43. When the 'Fade' button is clicked, have your circle fade in/out with any speed you like.
//     Hint: http://api.jquery.com/fadetoggle/

// 44. Put your name on the page.

// 45. Add some flair to your name when you click the 'Stylize!' button.
//     Feel free to edit the HTML however you see fit.

// 46. Create as many pacman clones as you see fit.

// 47. Add the class 'invisible' to each list item when they are hovered over.

// 48. When either square is clicked, have them swap colors.

// 49. When you click the vertical button, the squares above should align vertically.

// 50. Unhide the message.

//});
