const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class MediaRepository {
  create(options) {
    return normalizeDBQuery(db.Media.create(options));
  }

  find() {
    return normalizeDBQuery(
      db.Media.find()
        .select({ __v: 0, createdAt: 0, updatedAt: 0 })
        .lean()
        .exec(),
    );
  }
}

module.exports = new MediaRepository();
