const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema(
    {
        address: Object,
        company: String,
        name: String,
        nip: String,
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Customer', Customer)