require('dotenv').config()

const express = require('express');
const app = express();
const PORT = 5003;

//import fruits
// const fruits = require('./models/fruits.js')

//import fruit
const Fruit = require('./models/fruit.js')

// import veggies
// const veggies = require('./models/veggies.js')

//import veggie
const Veggie = require('./models/veggie.js')

// import mongoose
const mongoose = require('mongoose');

// Connect With Mongoose 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

// Connect Express to Mongo
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



// This is called 'middleware'
// It runs in the middle of the request response cycle (in the middle)
// sometime after the request is received, but before the final route handler is called
// Be sure to put middleware at the top of your server.js file,
// so that other routes don't handle the request and send the response
// before the middleware can be executed.
// Most of the time, you won't write your own middleware,
// but a lot of plugins and extended functionality of express exist as middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// Near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));



// index page to fruits and veggies
app.get('/', (req, res) => {
    res.render('Index');
});

// index page to list all fruits
app.get('/fruits', async function(req, res) {
    const foundFruits = await Fruit.find({})
        res.render('fruits/Index', {
            fruits: foundFruits
    })
});

// index page to list all veggies
app.get('/veggies', async function(req, res) {
    const foundVeggies = await Veggie.find({})
        res.render('veggies/Index', {
            veggies: foundVeggies
    })
});



// First, we'll need a route for displaying the page in our server.js file.
// IMPORTANT: put this above your show route, so that the show route doesn't accidentally pick up a /fruits/new request.
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/veggies/new', (req, res) => {
    res.render('veggies/New');
});



// Since the form in the last step tells the browser to create a POST request to /fruits,
// we'll need to set up a route handler for this kind of request
app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }

    // fruits.push(req.body);
    // send the user back to /fruits
    // res.redirect('/fruits');

    const createdFruit = await Fruit.create(req.body)
    console.log(createdFruit)
    res.redirect('/fruits')
    
});

app.post('/veggies', async (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }

    // veggies.push(req.body);
    //send the user back to /veggies
    // res.redirect('/veggies');

    const createdVeggie = await Veggie.create(req.body)
    console.log(createdVeggie)
    res.redirect('/veggies')

});



// Show Fruit from mongoDB
app.get('/fruits/:id', async (req, res) => {
    const oneFruit = await Fruit.findById(req.params.id)
    res.render('fruits/Show', {
        fruit: oneFruit
})
}); 

// Show Veggies
app.get('/veggies/:id', async (req, res) => {
    const oneVeggie = await Veggie.findById(req.params.id)
    res.render('veggies/Show', {
        veggie: oneVeggie
})
});



app.listen(PORT, () => {
    console.log('listening on port', PORT);
});