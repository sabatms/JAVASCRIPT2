const myMap = new Map();

const user ={id:45};

myMap.set("id",25);
myMap.set([1,2,3],25);
myMap.set(user,77);

console.log(myMap);
console.log(myMap.get("id"));
console.log(myMap.get(user));
console.log(myMap.has(user));

myMap.delete("id");
console.log(myMap);

console.log(myMap.size);

for (let item of myMap.entries()){
console.log(item);
}

for(let item of myMap.keys()){
console.log(item);
}

for(let item of myMap.values()){
          console.log(item)
}