const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const directoriesRouter = require('./routes/directories');
const filesRouter = require('./routes/files');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const apiV1 = '/api/v1';

app.use(`${apiV1}/directories`, directoriesRouter);
app.use(`${apiV1}/files`, filesRouter);

module.exports = app;
