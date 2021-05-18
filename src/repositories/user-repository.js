const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class UserRepository {
  create(options) {
    return normalizeDBQuery(db.User.create(options));
  }

  findUser(query) {
    return normalizeDBQuery(db.User.findOne(query).select('userName image'));
  }
}

module.exports = new UserRepository();
