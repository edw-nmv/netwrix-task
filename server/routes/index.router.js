const router = require('express').Router();
const dataRouter = require('./data.router');

router.use('/', dataRouter)

module.exports = router;
