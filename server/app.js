const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index.router');

const app = express();
const PORT = 5001;

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
