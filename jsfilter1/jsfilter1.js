const numbers =[2,4,6,8,10];

const item = numbers.map(One);

function One(value,index,arr){
          return value * 2;
}
console.log(item);
//

const numbers1=[1,3,5,7,9];
console.log(numbers1);
//

const numbers2 = [1,2,3,4]
const item1 = numbers2.map(Two);
function Two(value){
          return value * 3;

}
console.log(item1);
const item2 = item1.map(Three);
function Three( item){
          return item  / 10;
}
console.log(item2);
//
