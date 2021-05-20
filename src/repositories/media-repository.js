const db = require('../models');
const normalizeDBQuery = require('../utils/normalizeDBQuery');

class MediaRepository {
  create(options) {
    return normalizeDBQuery(db.Media.create(options).lean().exec());
  }

  findAll() {
    return normalizeDBQuery(
      db.Media.find({ active: true })
        .select({ __v: 0, createdAt: 0, updatedAt: 0, active: 0 })
        .lean()
        .exec(),
    );
  }

  findById(mediaId) {
    return normalizeDBQuery(
      db.Media.findById({ _id: mediaId, active: true })
        .populate({ path: 'owner', select: 'userName image' })
        .select({ __v: 0, createdAt: 0, updatedAt: 0, active: 0 })
        .lean()
        .exec(),
    );
  }

  findByUserId(userId) {
    return normalizeDBQuery(
      db.Media.find({ owner: userId, active: true })
        .select({ __v: 0, createdAt: 0, updatedAt: 0, active: 0 })
        .lean()
        .exec(),
    );
  }

  findMemes() {
    return normalizeDBQuery(
      db.Media.find({ type: 'meme', active: true })
        .select({ __v: 0, createdAt: 0, updatedAt: 0, active: 0 })
        .lean()
        .exec(),
    );
  }

  findGifs() {
    return normalizeDBQuery(
      db.Media.find({ type: 'gif', active: true })
        .select({ __v: 0, createdAt: 0, updatedAt: 0, active: 0 })
        .lean()
        .exec(),
    );
  }
  searchMemes(value) {
    return normalizeDBQuery(
      db.Media.find({
        type: 'meme',
        active: true,
        title: { $regex: value, $options: 'i' },
      })
        .select({ __v: 0, createdAt: 0, updatedAt: 0, active: 0 })
        .lean()
        .exec(),
    );
  }

  searchGifs(value) {
    return normalizeDBQuery(
      db.Media.find({
        type: 'gif',
        active: true,
        title: { $regex: value, $options: 'i' },
      })
        .select({ __v: 0, createdAt: 0, updatedAt: 0, active: 0 })
        .lean()
        .exec(),
    );
  }

  editMedia({ mediaId, type, title, _id }) {
    return normalizeDBQuery(
      db.Media.findOneAndUpdate(
        { _id: mediaId, owner: _id, active: true },
        { type: type, title: title },
        {
          new: true,
          select: { __v: 0, createdAt: 0, updatedAt: 0, active: 0 },
        },
      )
        .lean()
        .exec(),
    );
  }

  deleteMedia({ mediaId, _id }) {
    return normalizeDBQuery(
      db.Media.findOneAndUpdate(
        { _id: mediaId, owner: _id, active: true },
        { active: false },
        {
          new: true,
          select: { __v: 0, createdAt: 0, updatedAt: 0, active: 0 },
        },
      )
        .lean()
        .exec(),
    );
  }
}

module.exports = new MediaRepository();
