const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class UserRepository {
  create(options) {
    return normalizeDBQuery(db.User.create(options).lean().exec());
  }

  findUser(query) {
    return normalizeDBQuery(
      db.User.findOne(query).select('userName image').lean().exec(),
    );
  }

  findById(query) {
    return normalizeDBQuery(
      db.User.findById(query).select('userName image').lean().exec(),
    );
  }

  editUser({ _id, userName, image }) {
    return normalizeDBQuery(
      db.User.findOneAndUpdate(
        { _id: _id },
        { userName: userName, image: image },
        { new: true, select: 'userName image' },
      )
        .lean()
        .exec(),
    );
  }

  searchUsers(value) {
    return normalizeDBQuery(
      db.User.find({
        userName: { $regex: value, $options: 'i' },
      })
        .select('userName image')
        .lean()
        .exec(),
    );
  }
}

module.exports = new UserRepository();
