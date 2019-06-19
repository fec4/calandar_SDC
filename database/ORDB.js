//demo table i will perform tomorrow
var _ = require('underscore');
var fs = require('fs');

const path = require('path');
const pg = require('pg');
const pool = new pg.Pool({
  user: 'di',
  host: 'localhost',
  database: 'sdc',
  password: 'zdxuan123',
  port: '5432'
})

//useing two tables
var faker = require('faker');
//useing faker  to generate 10 m first trial
var inputFile = path.join(__dirname, '/listingdata5.tsv')

var start = Date.now();//start timer




//gonna test with 10 m data later
var number = 0;
while (number < 10000000) {

  var listingdata = '';
  for (var count = number; count < number + 100000; count++) {




    listingdata += `${count}\t`;
    listingdata+=`${faker.company.companyName()}\t`
    listingdata += `${faker.finance.amount(90000, 100000, 4)}\t`;

    listingdata += `${JSON.stringify(faker.date.recent())}\t`
    listingdata += `${JSON.stringify(faker.date.future())}\n`







  }

  number = count;

  console.log('10000 entries created');

  fs.appendFileSync('listingdata5.tsv', listingdata, (err) => {
    if (err) {
      console.log(err);
    }
  })
  console.log(number)
}


var millis = Date.now() - start;
var totalSecond = Math.floor(millis / 1000)
var minutes = Math.floor(totalSecond / 120);
console.log("seconds elapsed = " + Math.floor(millis / 1000));
// console.log(`${minutes} mintues and ${totalSecond-(minutes*60) } seconds for you generation script`)