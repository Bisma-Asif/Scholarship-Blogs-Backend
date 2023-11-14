const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  DegreeType: {
    type: String,
    required: true,
  },
  Field: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    default: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    required: 4.9,
  },
  Location: {
    type: String,
    default: true,
  },
  Duration: {
    type: String,
    default: true,
  },
  StudyMode: {
    type: String,
    default: true,
  },
  Languages: {
    type: String,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", blogSchema);
