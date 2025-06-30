const mongoose = require('mongoose');
const Counter = require('./Counter');

const TodoSchema = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

TodoSchema.pre('save', async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'todo_id' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this._id = counter.seq;
  }
  next();
});

module.exports = mongoose.model('Todo', TodoSchema);