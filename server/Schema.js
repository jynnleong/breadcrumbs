const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: String,
    children: [String],
    type: String,
});

module.exports = mongoose.model("FileSchema", fileSchema);

