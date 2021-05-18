const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MediaSchema = Schema(
  {
    media: {
      type: String,
      trim: true,
      required: [true, 'The media url is required'],
    },
    type: {
      type: String,
      enum: ['gif', 'meme'],
      required: [true, 'The type is required'],
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  },
);

const Media = mongoose.model('media', MediaSchema);

module.exports = Media;
