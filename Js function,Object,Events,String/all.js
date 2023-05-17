let x = myFunction(4,3);
function myFunction(a, b){
          return a*b;
}
console.log(x);

function Onefunction(A){
          return (4/2)*(A-30)
}
let value = Onefunction(80);
console.log(value);

function Onefunction(A){
          return(4/2)*(A-30)
}
let value1 = Onefunction();
console.log(value1);

let p = "The temperature in Abadan is" +  toFarenhit(90)  + "Farenhit.";
function toFarenhit(degre){
          return (10/5)*(degre-69);
}
console.log(p);

const car = {name: "Benz" , model:"2024", color:"Black"};
let z = "the car name is"+ car.name ;
let X = "the car model is"+ car.model;
let Y = "the car color is"+ car.color;
console.log(z);
console.log(X);
console.log(Y);

const Name ={
          firstName : "Saba",
          LastName :"Tahmasebi",
          Age: 24,
          Eyescolor:"Black",
}

let U = Name.firstName + Name.LastName + "is" + Name.Age + "years old!" + "and her eyescolor are" + Name.Eyescolor
console.log(U);

const fruits ={
          name :"bnana",
          color:"yellow",
          colories: 2000,
          fullName: function(){
            return this.name+ "" +" this color is "+ this.color+ "" +" and is coloris "+ this.colories;
          }
};

 console.log(fruits.fullName());

 let carName1 = "BMW 730li";
 let carName2 = "Porshe";

 document.getElementById("demo").innerHTML = carName1+ " "+carName2;

let answer1 = "its a aliright";
let answer2 = "her name is sara";
let answer3 = "her name is soha";

document.getElementById('demo').innerHTML = answer1+ "<br>"+ answer2+ "<br>"+ answer3

let fullName1 = "saba tahmasebi";
document.getElementById('saba').innerHTML = text.length;

document.getElementById("demo").innerHTML =
"Hello Dolly!";