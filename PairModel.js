const { Schema, model } = require('mongoose');

const Pair = new Schema({
  fromUser: { type: String, unique: true, required: true },
  toUser: { type: String, unique: true, required: true },
  wishes: { type: String, required: true }
})

module.exports = model('Pair', Pair)