const express = require('express');
const morgan = require('morgan');

const indexRouter = require('./routes/index.router');

const app = express();
const PORT = 4000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
