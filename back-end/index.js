const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// set static public
app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world");
})

// Pre-Processing API

app.all('/api', (req, res, next) => {
    console.log(req.method + " - Request is recieved !");
    next();
})

app.get('/api', (req, res) => {
    res.send("Hello API");
})

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send("Object Created");
})

// Create API to access the data from data.json file

// Step 1: Import data file
var data = require('./data.json');
const e = require('express');

// Setp 2 : Create API to access the all data
app.get('/products/all', (req, res) => {
    res.statusCode = 200;
    res.header('Content-type', 'application/json');
    res.send(data);
})

app.get('/products/:id', (req, res) => {
    var id = req.params.id;
    console.log(`Getting PRODUCT with ID : ${id}`);

    var product = data.find((element) => element.id == id);

    if(product) {
        res.statusCode = 200;
        res.header('Content-type', 'application/json');
        res.send(product);
    } else {
        res.statusCode = 404;
        res.send("Cannot find ID");
    }
})

// step 3 : Create API to add new object to data
app.post('/products/', (req, res) => {
    var newProduct = req.body;
    console.log(newProduct);

    var lastId = data[data.length - 1].id;
    var product = {
        id : lastId + 1,
        name : newProduct.name
    }

    data.push(product);

    res.statusCode = 200;
    res.send('Product is added!');
})

// step 3 : Update API to Update object to data
app.put('/products/:id', (req, res) => {
    var id = req.params.id;
    console.log(`Update PRODUCT with ID : ${id}`);

    var product = data.find((element) => element.id == id);

    if(product) {
        res.statusCode = 200;
        product.name = req.body.name;
        res.send("Product is updated");
    } else {
        res.statusCode = 404;
        res.send("Cannot find ID");
    }
})

app.delete('/products/:id', (req, res) => {
    var id = req.params.id;
    console.log(`Delete PRODUCT with ID : ${id}`);

    var index = data.findIndex((element) => element.id == id);

    if(index != -1) {
        res.statusCode = 200;
        data.splice(index, 1);
        res.send("Product is Deleted");
    } else {
        res.statusCode = 404;
        res.send("Cannot find ID");
    }
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
})