const mongoose = require('mongoose');

let Schema =  mongoose.Schema;

let CampaignSchema = new Schema({
    title: String,
    body: String,
    emails: [],
});