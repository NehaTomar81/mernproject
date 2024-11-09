require('dotenv').config();
const mongoose = require('mongoose');
const dburl = process.env.DATABASE;

// console.log("dburl==>", dburl)
mongoose.connect(dburl).then(() => {
    console.log("database connected");
}).catch(err => console.log(err.message));
