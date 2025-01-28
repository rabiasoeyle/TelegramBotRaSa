var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
const TelegramBot = require('node-telegram-bot-api');
const token = '7217632254:AAEHcD9onjWz2y622qYIebtjsW3AocHzzaY';
const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
const chatId = msg.chat.id;
  if(msg.text === "/start"){
    bot.sendMessage(chatId, 'Hello Rabia');
  }else{
    bot.sendMessage(chatId, 'Received your message Rabia');}
  
});
