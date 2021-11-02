I - Arrow function.

- Hàm mũi tên.
- Hàm bình thường sẽ viết
  function logger(log){
  console.log(log)
  }

- Arrow function
  const logger = (log) => {
  console.log(log)
  }

- Không có context

* ví dụ
  const course = {
  name: 'Javascript'
  getName: function(){
  return this; //content course
  }
  }

  const course = {
  name: 'Javascript'
  getName: () = >{
  return this; //undefined
  }
  }

- Không làm function constructor
  const Course = function(name, price){
  this.name = name;
  this.price = price
  }
  this. jsCourse = new Course("JavaScript", 5000)

  const Course = (name, price) => {
  this.name = name;
  this.price = price
  }
  this. jsCourse = new Course("JavaScript", 5000) // Course is not a constructor

II - JS modules.

- Bóc tách ra thành nhiều file.
- Import và export.

import logger, {TYPE_LOG ,TYPE_WARN, TYPE_ERROR } from './logger.js'
import \* as constants from './constants.js';
export const TYPE_LOG = 'log';
export const TYPE_WARN = warn';
export const TYPE_ERROR = 'error';
export default logger; //1 modules chỉ có thể có 1 export default.
export \* from '../logger.js'
export { default } from '.../logger.js'
export { default as logger} '.../logger.js'

III - Enhanced object literals

1. Định nghĩa key: value cho object.
   var name = 'JS';
   var price = 1000;
   var course = {
   name,
   price
   };

2. Định nghĩa method cho object.
   var course = {
   name,
   price,
   getName(){

   }
   };

3. Định nghĩa key: value cho object dưới dạng biến.
   var fieldName = 'name';
   var filedPrice = 'price';
   var course = {
   [fieldName]: 'JS,
   [filedPrice]: 1000
   };

IV - Spread
var array1 = ['JS', 'Ruby', 'PHP'];
var array2 = ['Dart', 'java''];
var array3 = [...array1, ...array2]
Bỏ đi dấu ngoặc của Array hoặc object

var obj1 = {
name: 'javascript'
},
var obj2 = {
price: 2000
}

var object 3 = {
...obj1,
...obj2
}

---

var array = ['JS', 'Ruby', 'PHP'];
function logger (...rest){

}

logger(...array)

V- Destructuring
var array = ['JS', 'Ruby', 'PHP'];
var [a, , c] = array;
console.log(a, c)

---

var course = {
name: 'javascript',
price: 1000,
image: 'image-address',
children: {
name: 'Reactjs'
}
}

var {name: parentName, children: {name: childrenName}} = course;
var {name, description = 'default description'} = course;
