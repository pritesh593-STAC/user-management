const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  id: Number,
  fullname: String,
  email: String,
  gender: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
