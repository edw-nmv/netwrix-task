// const pg = require('pg');
// // const conString = 'postgres://postgres:postgres@localhost/netwrix';

// const config = {
//   user: 'postgres',
//   database: 'netwrix',
//   password: 'postgres',
//   port: 5432
// }

// const pool = new pg.Pool(config);

// const getDataFromDB = (req, res) => {
//     pool.connect(conString, function(err, client, done) {
//     if (err) {
//       return console.error('error fetching data', err);
//     }
//     client.query('SELECT * FROM partner_locator;', [], function (err, data) {
//       done();
//       if (err) {
//         return next(err);
//       }
//       res.json(data);
//     })
//   });
// }

// module.exports = { getDataFromDB };


