
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
const routes = require('./Back-End/Routes/routes');

const Endpoint = express();

Endpoint.use(express.json());
Endpoint.use(cors());
Endpoint.use(bodyParser.json());

Endpoint.use('/api', routes.routes);
Endpoint.get('/world-data',(req, res)=>{
    res.status(200).json({message:"Success"})
})


Endpoint.listen(port, () => console.log('App is listening on url http://localhost:' + 3000));