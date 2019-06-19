const pg = require('pg');

// const connection = 'postgres://di:zdxuan123@localhost:5432/sdc';
// const client = new pg.Client(connection);
// client.connect((err, connection) => {
//   if (err) console.log(err);
//   else console.log('postgras db successfully connected!');
// });
const pool=new pg.Pool({
  user:'di',
  host:'localhost',
  database:'sdc',
  password:'zdxuan123',
  port:'5432'
})
const createTableTwo="CREATE TABLE listing (listingid VARCHAR(20) NOT NULL,listingName VARCHAR(255) NOT NULL, bookingId VARCHAR(255) NOT NULL,bookingPeriodStart VARCHAR(255),bookingPeriodEnd VARCHAR(255),PRIMARY KEY(listingid))";



pool.query(createTableTwo,(err,res)=>{
  console.log(res);
  pool.end();
})