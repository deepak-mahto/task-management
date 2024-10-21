const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const task = mongoose.model("tasks", taskSchema);

module.exports = {
  task,
};
