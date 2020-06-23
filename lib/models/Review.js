const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  movie: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  authorName: {
    type: String,
    required: true
  },

  comment: {
    type: String,
    required: true,
  }

}, { timestamps: true });

module.exports = mongoose.model('Review', schema);
