const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const mw = require('./middleware');
app.use(mw({option_1: 1, option_2: "Hello"}));

app.get('/', (req, res) => {
    res.send('Hello world');
})

//-------------------------------------

app.use('/', (req, res) => {
    res.send("Next route");
})

app.use((err, req, res, next) => {
    console.error('ERROR HANDLER: ', err.message);
    res.status(500).send(err.message);
})

const userRouter = require('./user.router');
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log("Server is running");
})