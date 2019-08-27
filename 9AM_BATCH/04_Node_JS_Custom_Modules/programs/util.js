const fs = require('fs');
const path = require('path');

let greet = () => {
    console.log('Welcome to Node JS');
};

let wishMe = (name) => {
    console.log(`Good Morning ${name}`);
};

let saveToFile = (filename,fileContent) => {
    fs.writeFile(path.join(__dirname,'data',filename),fileContent,'utf8',(err) => {
        if(err){
            throw err;
        }
        console.log('data is saved');
    });
};

let generatePhoneNumbers = () => {
    let phoneNumbers = [];
    let startNumber = '9844';
    for(let i=1; i<=1000; i++){
        let endNumber = Math.floor(Math.random() * 1000000);
        let phoneNumber = startNumber + endNumber;
        if(phoneNumber.length < 10){
            phoneNumbers.push(phoneNumber + '0');
        }
        if(phoneNumber.length === 10){
            phoneNumbers.push(phoneNumber);
        }
    }
    return phoneNumbers;
};

module.exports = {
    greet,
    wishMe,
    saveToFile,
    generatePhoneNumbers
};
