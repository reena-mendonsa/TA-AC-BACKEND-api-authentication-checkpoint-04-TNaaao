var mongoose = require('mongoose');
var slugger = require('slugger');
var Schema = mongoose.Schema;

var questionSchema = new Schema(
  {
    questionId: { type: String },
    title: { type: String, unique: true, require: true },
    description: { type: String },
    slug: { type: String },
    author: { type: mongoose.Types.ObjectId, ref: 'Profile' },
    upvoteCount: { type: Number, default: 0 },
    upvotedBy: [{ type: mongoose.Types.ObjectId, ref: 'Profile' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    tags: [{ type: String }],
    answers: [{ type: mongoose.Types.ObjectId, ref: 'Answer' }],
  },
  { timestamps: true }
);

questionSchema.pre('save', function (next) {
  this.slug = slugger(this.title);
  next();
});

var Question = mongoose.model('Question', questionSchema);
module.exports = Question;