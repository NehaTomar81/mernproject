const mongoose = require('mongoose');
const student = new mongoose.Schema({
email:{
    type:String
},
firstname:{
    type:String
},
lastname:{
    type:String
},
phone:{
    type:String
},
dob:{
    type:String
},
course:{
    type:String
},
pass:{
    type:String
},
city:{
    type:String
}
    

});

const myschematype = new mongoose.model("employees", student);
module.exports = myschematype