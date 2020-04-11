const express = require('express');

const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routers');

const app = express();



app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/contacts', router)





app.get('/', (req, res) => {
    res.send('welcome bangladesh');

});







const PORT = process.env.PORT || 8080;

mongoose
    .connect('mongodb+srv://habib:emdad1234@cluster0-2pvwn.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

.then(() => {
    app.listen(PORT, () => {

        console.log('server is running on  PORT' + PORT)
    })

})

.catch(e => {

    console.log(e)
});