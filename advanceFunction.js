//Advance Functions

function first() {
    var project = 'construction';
    function second() {
        alert(project);
    }
    return second;
}

var newFunc = first();
newFunc();



const first = () => {
    const project = 'construction';
    const second = () => {
        alert(project);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures 
// a function run. the function executed. it is never going to executed again.
// but it is going to remember that there are references to those varaibles.
// so the child scope always has access to the parent scope. 

const project1 = () => {
    const progress = 100;
    const project2 = () => {
        const project3 = "construction";
        alert(project1);
    }
    return project2;
}

const newFunc = project1();
newFunc();


// Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);


// Compose

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding side effects, functional purity.

var a =    1, 

function b() {
    a = 2;
}

// Advance Arrays.

const arrays = [2, 3, 4, 5];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});
console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map((num) => {
    return num * 2;
});

console.log('map', mapArray);

const array = [1, 2, 4, 5, 6, 7, 30];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2);
})

console.log("forEach", double);

// Map;

const nsp = [1, 3, 4, 5, 6, 8];
const mapNsp = nsp.map(num => num * 2);
    console.log("map", mapNsp);


// filter.

const pmu = [3, 5, 6, 8, 9, 10];
const filterPmu = pmu.filter(num => num > 5);
   console.log("filter", filterPmu);


// Reduce. 

const mrrd = [4, 5, 6, 7, 8];
const reduceMrrd = mrrd.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
    console.log("reduce", reduceMrrd);


// References. 

var nsp = {value: 10};
var nsp2 = nsp;
var nsp3 = {value: 10};

// Context vs Scope. 

const nsp = {
    pmu: function() {
        console.log(this);
    }
}

// instantiantion. 
// ES6 code base. 

class Player {
    constructor (name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, i am ${this.name}, i am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log("Wizard", this);
    }
    play() {
        console.log(`Wow i am a ${this.type}`);
    }
}


const Wizard1 = new Wizard("Sara", "Healer");
const Wizard2 = new Wizard("Meachal", "Black magic");

// References. 

var object1 = { value: 10};
var object2 = object1;

var object3 = { value: 50};

// ES8 2017. 

const fun = ( 
    a,
    b,
    c,
    d,
    e,
    ) => {
    console.log(a);
}

fun(1,2,3,4,5);

Object.values
Object.entries
Object.keys

let cdc = {
    username: "ahmad",
    username1: "jhon",
    username2: "nazif",
    username3: "ajmal", 
    username4: "akmal",
    username5: "farhad", 
    username6: "Monir"
}

Object.keys(cdc).forEach((key, index) => {
    console.log(key, cdc[key]);
})

Object.entries(cdc).forEach( value => {
    console.log(value);
})

Object.values(cdc).forEach(value => {
    console.log(value);
})

Object.entries(cdc).map(value=> {
    return value[1] + value[0].replace("username", "");
})

// ES8 + ES9 Async Await:




// ES10 2019. 

const array = [['the', 'he'], 'ahmad', 'jawad', ['doc', 'path'], [[[['snick']]]]];
array.flat(5);


const nsp = array.flatMap(string => string + 'ahmad');

const userName = '.......mohib.00000@gmail.com';
const userName1 = 'mohib.arsala@gmail.com.........';

console.log( userName.trimStart());
console.log( userName.trimEnd());


try {
    true + "Hi";
} catch(error) {
    console.log("Your missed up", + error);
}

try {
    nsp + "Hi";
} catch(error) {
    console.log("Your missed up" + error);
}


const basket = ['apple', 'grapes', 'oranges'];
for(i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item);
})

// for of
// Interating - array, strings. 

for(item of basket){
    console.log(item);
}

// for in - properties. 
// enumerating on Object,

basket = {
    0 : 'applicationCache',
    1 : 'WebGLShaderPrecisionFormat',
    2 : 'oranges',
    3 : 'bananase'
}

for(item in basket){
    console.log(item);
};


// Debugging

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('accumulator', accumulator);
        console.log('array', array);
        // debugging: 
         return accumulator.concat(array)
     }, []);

const flattened =  [[0,1], [2,3], [4,5]].reduce(
    (a, b) => a.concat(b), []
);    


const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
       console.log("array", array);
       console.log("accumulator", accumulator); 
       return accumulator.concat(array);
    }, []);


const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
      debugger;
       return accumulator.concat(array);
    }, []);    

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
      debugger;
       return [].concat(array);
    }, []); 
    
// how dose javascript works?
// whart is programming ? 

// 



// memory heap, it meant memory alocating. 

const nsp = 'a-b' + 20;
const nsp1 = 'c-d' + 50;
const nsp2 = nsp + nsp1;


// call stack 


console.log(nsp2 + 2);
console.log("nsp1");
console.log("nspp2");


// recursion it meant function call itself as bellow, 

function note() {
    note()
};
note();


// call stack

// WEB API

//call back queue

// event loop

console.log("1");
setTimeout(() => {
    console.log("2");
}, 2000);
console.log("3");


// WebPack

module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        fileName: 'bundle.js'
    }
}

export const add = (a, b) => a + b;

or

export default function add(){
    return a + b;
}

import { add } from './add';
or 
import add from '/add';
