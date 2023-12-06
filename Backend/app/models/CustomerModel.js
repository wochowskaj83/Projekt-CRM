const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema(
    {
        adress: Object,
        company: String,
        name: String,
        nip: String,
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Customer', Customer)