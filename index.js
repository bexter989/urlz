const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'))


app.get('/', (req,res) => {
    // TODO: redirect to Url
});

app.get('/url/:id', (req,res) => {
    // TODO: get a short url by id
});

app.post('/url', (req,res) => {
    // TODO: Create a short Url
});


const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listenning at http://localhost:${port}`)
});