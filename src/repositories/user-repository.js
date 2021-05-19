const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class UserRepository {
  create(options) {
    return normalizeDBQuery(db.User.create(options));
  }

  findUser(query) {
    return normalizeDBQuery(db.User.findOne(query).select('userName image'));
  }

  findById(query) {
    return normalizeDBQuery(db.User.findById(query).select('userName image'));
  }

  editUser({ _id, userName, image }) {
    return normalizeDBQuery(
      db.User.findOneAndUpdate(
        { _id: _id },
        { userName: userName, image: image },
        { new: true, select: 'userName image' },
      ),
    );
  }
}

module.exports = new UserRepository();
