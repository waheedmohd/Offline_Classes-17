// Load 3rd party module
const _ = require('lodash');
const moment = require('moment');

// Array

let colors = ['red','blue','orange','white','black'];

// Normal JavaScript
let result = '';
colors.forEach(function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// Lodash Module
result = '';
_.forEach(colors, function(color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// mixed Array
let mixedArray = [100, 'abc', 200 , 'test' , 300 , true];
let countElements = (array) => {
    let numberCount = 0;
    let stringCount = 0;
    array.forEach(function(element) {
        if(typeof(element) === 'number'){
            numberCount++;
        }
        if(typeof(element) === 'string'){
            stringCount++;
        }
    });
    return {numberCount , stringCount };
};
console.log(countElements(mixedArray));

// Lodash Example
let countValues = (array) => {
    let numberCount = 0;
    let stringCount = 0;
    _.forEach(array, function(element) {
        _.isNumber(element) ? numberCount++ : numberCount;
        _.isString(element) ? stringCount++ : stringCount;
    });
    return {numberCount , stringCount };
};
console.log(countValues(mixedArray));


// Moment JS
let val = moment().format('MMMM Do YYYY, h:mm:ss a');

val = moment().format('dddd');

val = moment().format("Do,MMM,YYYY");

val = moment("20130214", "YYYYMMDD").fromNow();

val = moment().startOf('day').fromNow();

val = moment().endOf('day').fromNow();
console.log(val);


// Local Specific
moment.locale('te');         // te
val = moment().format('LT');
console.log(val);
