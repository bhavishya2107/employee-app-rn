const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  picture: {
    type: String,
  },
  salary: {
    type: String,
  },
  position: {
    type: String,
  },
  address:{
    type:String
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
