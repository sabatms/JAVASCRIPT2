const fruits = ["Banana", "Orange", "Apple", "Mango"];

const result = fruits.toString();

console.log(result);

// to string () => میاد متغیرهایی که تعریف کردیم رو تبدیل به یک رشته میکنه

const colors = ["Red", "Green", "Blue", "Purple"];

const result1 = colors.join("*");
const result2 = colors.join("/");

console.log(result1);
console.log(result2);

/*
join() => (/,*,-, space = فاصله گذاشتن , = , ...) میاد هر المانی که هست رو مثلا
اگر بهش بدیم میاد به متغیر به همان المانی که براش تعریفش کردیم نشان میدع
*/

const fruits1 = ["Cornelian cherry","Rhubarb","Grapefruit","Lime"];

const result3 = fruits1.pop();

console.log(result3);
console.log(fruits1);

//pop() =>  میاد اون اخرین آیتم از متغیری که تعریف کردیم روحذف میکنه از سمت راست

const fruits2 = ["Kiwi", "Pineapple", "Apricot", "Raspberry"];

const result4 = fruits2.push("Blueberry");

console.log(result4);
console.log(fruits2);

// push() =>   میاد اون اخرین آیتم از متغیر که تعریف کردیم اضافه میکنه وحتی تعداد هم به ما نمایش میده که چندتا آیتم داریم از سمت راست

const fruits3 = ["Plum","Green almond","Avocado","Coconut"];

const result5 = fruits3.shift();

console.log(result5);
console.log(fruits3);

// shift() => میاد اولین آیتم از اون ارایه که تعریف کردیم رو حذف میکنه یعنی از سمت چپ

const vegtabels = ["Mushroom","Broccoli","Cucumber","Tomato","Red pepper"];

const result6 = vegtabels.unshift("Eggplant");

console.log(result6);
console.log(vegtabels);

// unshift => میاد اون آیتم از ارایه که تعریف کردیم رو به اولش اضافه میکنه از سمت چپ

const vegtabels1 = ["Lettuce","Asparagus","Spinach","Green chilli"]
vegtabels1[0]= "Courgette";
console.log(vegtabels1);

// خانه را بنویسیم و آن چیزی که باید عوض کنیم رو داخلش قرار بدیم index number اگر بخوایم یک ایتم رو در یک ارایه جای آن را عوض کنیم باید آن 

/*نتیجه گیری : pop & shift => کارشون حذف کردن هست 
push & unshift => کارشون اضافه کردن است
*/ 

const myGirls=["Sanam","Soha","Sara"];
const myBoys =["Chavoosh","Varesh","hoomayun"];
 const result7= myGirls.concat(myBoys);
 console.log(result7);

 //concat() =>  کارش این هست که بتونه دو تا متغیر رو به هم وصل کنه شایدم بیشتر

 const array1 = ["Cecilie", "Lone"];
 const array2 = ["Emil", "Tobias", "Linus"];
 const array3 = ["Robin", "Morgan"]
 const myChildren = array1.concat(array2, array3);
 console.log(myChildren);
 //

const myArray = ["Alireza", "Esmail", "Arman"];
const myChildren1 = myArray.concat("Peter");
console.log(myChildren1);
/*
استفاده کنی و یک اسم یا متغیری بهش اضافه کنیم کافیه اسم را بنویسیم concat در اینجا اگر بخوایم از متد 
و بعد که نتیجه رو دیدیم میاد در اخرین ایتم متغیر قرار میگیره
*/

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2,0, "Lemon", "Kiwi");
console.log(fruits4);
// splice () =>آیتم های جدیدی را به یک آرایه اضافه می کند 

/*
مثلا در اینجا ما گفیم که بیا از خونه ۲ هیچی حذف نکن ولی از خونه ۲ به بعد بیا لیمو و کیوی رو اضافه کن
*/

const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(citrus);

//The slice() method does not remove any elements from the source array.
// می باشد delete اما در این متد میاد حذف میکنه برای ما این متد خیلی بهتر از

const fruits6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits.slice(1,3);
console.log(citrus1);

const Numbers = ["16","17","18","19"];

const result8 = Numbers.slice(1,3);
console.log(result8);  