const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class MediaRepository {
  create(options) {
    return normalizeDBQuery(db.Media.create(options));
  }

  findAll() {
    return normalizeDBQuery(
      db.Media.find()
        .select({ __v: 0, createdAt: 0, updatedAt: 0 })
        .lean()
        .exec(),
    );
  }

  findById(mediaId) {
    return normalizeDBQuery(
      db.Media.findById(mediaId)
        .populate({ path: 'owner', select: 'userName image' })
        .select({ __v: 0, createdAt: 0, updatedAt: 0 })
        .lean()
        .exec(),
    );
  }

  findMemes() {
    return normalizeDBQuery(
      db.Media.find({ type: 'meme' })
        .select({ __v: 0, createdAt: 0, updatedAt: 0 })
        .lean()
        .exec(),
    );
  }

  findGifs() {
    return normalizeDBQuery(
      db.Media.find({ type: 'gif' })
        .select({ __v: 0, createdAt: 0, updatedAt: 0 })
        .lean()
        .exec(),
    );
  }
}

module.exports = new MediaRepository();
