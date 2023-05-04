const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits.get("apples"));

const fruits1= new Map([
  ["apples",500],
  ["bananas",300],
  ["Orange",200],
]);
fruits1.set("apples",200);
console.log(fruits1.get("apples"));

console.log(fruits1.size);

fruits1.delete("apples");
console.log(fruits1.size);

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value + "<br>"
})
console.log(text);

/*
فرقی باهم ندارن ولی روش اولی برای متد 
set() , get()
راحتر هست
*/