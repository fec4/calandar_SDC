const nr=require('newrelic');
const express = require('express');
// const db = require('../database/db.js');
// const seeder = require('../database/seeder.js');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../public'));
// app.use('/:id', express.static(`${__dirname}/../public`));



  // app.get('/seedDb', (req, res) => {
  //   console.log('hi')
  // });
  // app.get('/testing',(req,res)=>{
  //   count++;
  //   console.log(count);
  //   res.send('hi');
  // })

  //gets all reservations at a specific listing id!
  // app.get('/api/listings/:listingId/reservations', (req, res) => {
  //   db.serveListing(req.params.listingId, (err, data) => {
  //     if (err) console.log('error with serving listing', err);
  //     else res.send(data);
  //   });
  // });


  app.get('/', (req, res) => {


    res.send('Hello World!');
  })
  const port = 3000;
  app.listen(port);
  console.log('running')



//loadtest http://localhost:3001/ -t 20 -c 10 --rps 500
