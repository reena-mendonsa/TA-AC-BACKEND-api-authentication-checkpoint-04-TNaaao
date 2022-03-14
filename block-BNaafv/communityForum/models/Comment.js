var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    text: { type: String, unique: true, require: true },
    author: { type: mongoose.Types.ObjectId, ref: 'Profile' },
    answerId: { type: mongoose.Types.ObjectId, ref: 'Answer' },
    questionId: { type: mongoose.Types.ObjectId, ref: 'Question' },
  },
  { timestamps: true }
);

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;