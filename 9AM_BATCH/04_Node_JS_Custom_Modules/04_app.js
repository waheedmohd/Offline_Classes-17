// load custom module
const util = require('./programs/util');

util.greet();

util.wishMe('John');

util.saveToFile('welcome.txt','Good Morning');

// Get random phone numbers
let phones = util.generatePhoneNumbers();
let filename = 'phones.txt';
util.saveToFile(filename,phones);