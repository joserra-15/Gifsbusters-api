const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = Schema(
  {
    firebaseId: {
      type: String,
      required: [true, 'The firebaseId is required'],
      unique: true,
    },
    userName: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      required: [true, 'The email is required'],
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      default: 'https://media.giphy.com/media/W2j0sdCmHRaqLntCRD/giphy.gif',
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('user', UserSchema);

module.exports = User;
