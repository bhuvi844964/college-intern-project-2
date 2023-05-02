const express = require("express");
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())



mongoose.connect("mongodb+srv://avi-sin:CJTIF4CupXQdRKHV@cluster0.ovf3r.mongodb.net/group16Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)                       


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});