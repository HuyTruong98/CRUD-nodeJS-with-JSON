const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP longer
// app.use(morgan('combined')); // để xem bug đã được gởi lên server chưa, để tìm ra lỗi dễ dàng hơn

// template engine
app.engine('hbs', handlebars({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Home, search, contact

//Route init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);