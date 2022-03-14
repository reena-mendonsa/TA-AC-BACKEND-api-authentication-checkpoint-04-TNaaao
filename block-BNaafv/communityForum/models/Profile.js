var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var profileSchema = new Schema({
  username: { type: String, unique: true, require: true },
  name: { type: String },
  bio: { type: String },
  image: { type: String },
  isAdmin: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  upvotedQuestions: [{ type: mongoose.Types.ObjectId, ref: 'Question' }],
  upvotedAnswers: [{ type: mongoose.Types.ObjectId, ref: 'Answer' }],
  comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
});

profileSchema.methods.profileJSON = async function () {
  var data = {
    name: this.name,
    username: this.username,
    bio: this.bio,
    image: this.image,
    isAdmin: this.isAdmin,
    isBlocked: this.isBlocked,
  };
  return data;
};

var Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;