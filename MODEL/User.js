// to create a schema for our database we will take help from mongoose docs
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    }
})

// after the schema is created we convert it into a model

const Users = mongoose.model('Users', userSchema);
module.exports = Users;

