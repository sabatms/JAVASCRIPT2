const arrays = [8,18,25,32,45,77,100];

const result = arrays.filter((number) => number > 10 );
const result1= arrays.filter((number) => number < 100);
const result2= arrays.filter((number) => number >20 && number< 100);

console.log(result);
console.log(result1);
console.log(result2);

const citys= ["new yok", "shiraz","London","sangapour","sanandaj"];
const result3 = citys.filter(citys => citys.startsWith("s"));
console.log(result3);