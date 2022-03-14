var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema(
  {
    text: { type: String, unique: true, require: true },
    author: { type: mongoose.Types.ObjectId, ref: 'Profile' },
    upvoteCount: { type: Number, default: 0 },
    upvotedBy: [{ type: mongoose.Types.ObjectId, ref: 'Profile' }],
    questionId: { type: mongoose.Types.ObjectId, ref: 'Question' },
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

var Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;