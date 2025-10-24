const express = require('express');
const bodyParser = require('body-parser');
const aboutRoutes = require('./routes/aboutRoutes.js');
const productsRoutes = require('./routes/productsRouter.js')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use ('/', aboutRoutes);
app.use ('/products', productsRoutes);
// start server
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);

});
