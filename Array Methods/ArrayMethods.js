const arr1 =[20,18,16,14,12,10,13,15,17,19];
const final =arr1.length-1;

for (let i = 0;i <= final; i++){
          if(arr1[i] %2 ==0){
                    console.log(arr1[i]);
          }
}

console.log(arr1);
console.log(typeof arr1);

console.log(arr1.length);
console.log(arr1.sort());

const obj ={
age:16,
test:()=>10+16,
}
console.log(obj.test());
console.log(obj.age);