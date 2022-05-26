const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    }
  });
  
  module.exports = mongoose.model('Info', infoSchema);