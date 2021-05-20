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
      default:
        'https://res.cloudinary.com/dwlujoptw/image/upload/v1621507077/giphy_axvhld.gif',
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('user', UserSchema);

module.exports = User;
