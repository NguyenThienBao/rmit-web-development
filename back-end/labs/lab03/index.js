const express = require('express');
const app = express();

const port = 3000;

const bodyParser = require('body-parser');
//const methodOverride = require('method-override');

const errorHandler = require('./middleware/error-handler');
const logError = require('./middleware/log-error');
const clientErrorHandler = require('./middleware/client-error-handler');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    console.log("Thhis is the MiddleWare")
    try {
        fs.readfile('file-does-not-exist', (err, data) => {
            if (err) {
                throw new Error("Cannot read file");
            } else {
                res.send(data)
            }
        }) 
    } catch {
        throw new Error("Soomethhing went wrong");
    }
})

app.use(logError);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Hello world - ${port}`)
})