let setOfNum = new Set();

setOfNum.add(2);
setOfNum.add(5);
setOfNum.add(7);

console.log(setOfNum);
console.log(setOfNum.has(3))
setOfNum.delete(7);
console.log(setOfNum);

let listOfNum=[2,3,4,5,6,7,8,9];
// console.log(new Set(listOfNum));
let newSet = new Set(listOfNum)
for (let item of newSet){
    console.log(item)
}

//map
//key value pair

// let map = new Map();
// map.set("1", "one")
// console.log(map.get("1"))

// find the occuurances of each letter in a sentances

let map = new Map();
let sentence = "This is a sentance"

for (let letter of sentence.split("")) {
    let caseSensitiveLetter = letter.toLowerCase();
    if (map.has(caseSensitiveLetter)) {
        // add the count by 1
        let count = map.get(caseSensitiveLetter);
        map.set(caseSensitiveLetter, count + 1);
    } else {
        map.set(caseSensitiveLetter, 1);
    }
}
console.log(map);
console.log(map.keys())
console.log(map.values());

// Array.form
// console.log(Array.from(map, ([key, value])=> value));
// console.log(Array.from(map, ([key, value]) => ({key, value})));
// console.log(Array.from(map, (item)=> item));
console.log(Array.from(newSet, item=> item));

// array.some & array.every
const arr = [1,2,3,4,5];
console.log("some", arr.some(item => item % 2 == 0)); 
console.log("every", arr.every(item => item % 2 == 0)); 

// map which converts one type of array to another type it
// returns it as new array

let keyValue = Array.from(map, ([key, value]) => ({key, value}));
console.log(keyValue);
console.log(keyValue.map(currItem => currItem.value));

// Array.filter modify it's default bhehaviour using the prototype



let originalFilterFn = Array.prototype.filter;
Array.prototype.filter = function (cb) {
    //this  refrence to the array on which filter is being applied
    return originalFilterFn.call(this, (item) => {
        console.log(item)
        return cb(item);
    });
}

console.log([1, 3, 6, 8].filter(item => item % 2 == 0));

// Object.assign & Object.create
let org = {org : "Devsnest"};

let newObj = {};
Object.defineProperties(newObj,{
    age:{
        value: 22,
        // enumerable: true,
        writable:false
    }
})

let somePersone = Object.create(org, {firstName: {value: "Foo", enumerable: true}});
let mergedObject = Object.assign({}, somePersone, {car: "BMW"});
console.log(mergedObject)