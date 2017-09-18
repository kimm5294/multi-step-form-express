var mongoose = require("mongoose");

var profileSchema = new mongoose.Schema({
  name: String,
  dob: String,
  nationality: String,
  location: String,
  association: String,
  team: String,
  gender: String,
  sport: String,
  about: String,
  interests: String,
  fb: String,
  twitter: String,
  instagram: String,
  youtube: String,
  snapchat: String,
  alcohol: Boolean,
  married: Boolean
})

module.exports = mongoose.model("Profile", profileSchema);