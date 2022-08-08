const express = require('express');

// Named Import
// const { namedImport } = require(somelibrary);
const { adminRoute } = require('./routes/admin/adminRoute');
const { deliveryboyRoute } = require('./routes/deliveryboy/deliveryboyRoute');
const app = express();


app.use('/customer',adminRoute);
app.use('/deliveryboy',deliveryboyRoute);

let port = 4000;
app.listen(port,()=>{
    console.log('The server is listening on',port);
});