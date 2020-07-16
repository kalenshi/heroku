const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
   firstname: String,
   lastname: String,
   age: Number
});