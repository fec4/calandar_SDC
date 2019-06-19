const nr=require('newrelic');
const express = require('express');
// const db = require('../database/db.js');
// const seeder = require('../database/seeder.js');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cluster=require('cluster');

app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../public'));
// app.use('/:id', express.static(`${__dirname}/../public`));
var count=0;
if(cluster.isMaster){
  var cpuCount=require('os').cpus().length;

  for(var i=0;i<cpuCount;i++){
    count++;
    cluster.fork();

  }
  cluster.on('exit', function (worker) {

    // Replace the dead worker,
    // we're not sentimental
    console.log('Worker %d died :(', worker.id);
    cluster.fork();

})
  console.log(`${count} workers created`);
}else{


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


  app.get('/testing', (req, res) => {
    console.log(cluster.worker.id)
    res.send('yo i am working with '+cluster.worker.id);
  })
  const port = 3001;
  app.listen(port);
  console.log('running')
}


//loadtest http://localhost:3001/ -t 20 -c 10 --rps 500
