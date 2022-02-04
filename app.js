const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

//import
const customersRouter = require('./routes/customers');
const usersRouter = require('./routes/users');

app.use('/customers', customersRouter);
app.use('/users', usersRouter);

//routes
app.get('/', (req, res) => {
    res.send('Home route');
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!');
})

//listen to the server
app.listen(3000);