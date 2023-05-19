let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);
let text1 = 'It\'s alright.';
console.log(text1);
let text2 = "The character \\ is called backslash.";
console.log(text2);
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
// x is a string
let x = "John";

// y is an object
let y = new String("John");

document.getElementById("demo").innerHTML =
typeof x + "<br>" + typeof y;

let x1 = "John";        // x is a string
let y1 = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x1==y1);

let x2 = "John";        // x is a string
let y2 = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x2===y2);

let x3 = new String("John");  // x is an object
let y3 = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x3==y3);

let x4 = new String("John");  // x is an object
let y4 = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x4===y4);

let text3 = "Apple, Banana, Kiwi";
let part = text3.slice(7)
document.getElementById("demo").innerHTML = part;

let text4 = "Apple, Banana, Kiwi";
let part1 = text4.slice(-12);
document.getElementById("demo").innerHTML = part1;


let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substring(7,13);

function myFunction() {
          let text = document.getElementById("demo").innerHTML; 
          document.getElementById("demo").innerHTML =
          text.replace(/MICROSOFT/i,"W3Schools");
}

function myFunction() {
          let text = document.getElementById("demo").innerHTML;
          document.getElementById("demo").innerHTML =
          text.toUpperCase();
}