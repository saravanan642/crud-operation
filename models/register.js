const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name : {type :String , require : true},
    email : {type :String , require : true , unique : true},
    contact : {type : String , require: true},
    city :{type :String, require : true},
})


const Register = mongoose.model("sampledatabase",registerSchema);
module.exports =Register;