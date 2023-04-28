const arr = [20,21,22,23,24,25];

const final = arr.length-1;

arr.forEach(num =>console.log(num%2));

arr.forEach(test);

function test(num){
     if(num % 2 == 0){
          console.log(num);
     }
}

console.log(arr);
arr[0]=15;
console.log(arr);

console.log(Array.isArray(arr));