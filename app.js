require("dotenv").config() 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require( 'express-session');
var methodOverride =require ('method-override') ;


//rutas
const indexRouter = require('./router/indexRouter');
const formRouter = require('./router/formRouter');
const productosRouter = require('./router/productosRouter');
const usersRouter = require('./router/usersRouter');
const adminRouter = require("./router/adminRouter");

const localCheck = require("./middlewares/localCheck");
const cookieCkeck = require("./middlewares/cookieCheck")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( {secret :"checkpoint", resave : true ,saveUninitialized:true}));

app.use(methodOverride('_method'));



app.use(session({secret: "CheckPoint", resave: false, saveUninitialized: true}));
app.use(localCheck);
app.use(cookieCkeck);
//app.use(cookieCkeck);


app.use('/', indexRouter);
app.use('/formularios', formRouter);
app.use('/productos', productosRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
