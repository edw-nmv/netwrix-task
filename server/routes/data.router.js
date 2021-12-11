const router = require('express').Router();

const pg = require('pg');

const config = {
  user: 'postgres',
  database: 'netwrix',
  password: 'postgres',
  port: 5432
}

const pool = new pg.Pool(config);

router.get('/', (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log("Can not connect to the DB" + err);
    }
    client.query('SELECT * FROM partner_locator', function (err, data) {
      done();
      if (err) {
        return next(err);
      }
      res.json(data.rows);
    })
  })
})

module.exports = router;
