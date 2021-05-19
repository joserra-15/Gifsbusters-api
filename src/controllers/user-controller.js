const { UserRepo } = require('../repositories');

async function signUp(req, res, next) {
  const { uid, email } = req.user;

  try {
    const response = await UserRepo.findUser({ email: email });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: response.data,
        error: null,
      });
    }

    const { data, error } = await UserRepo.create({
      firebaseId: uid,
      email: email,
    });

    if (error) {
      return res.status(400).send({
        data: null,
        error: error,
      });
    }

    res.status(201).send({
      data: {
        _id: data._id,
        userName: data.userName,
        image: data.image,
      },
      error: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function signOut(req, res) {
  req.signOut();

  res.status(200).send({
    data: 'OK',
    error: null,
  });
}

async function getUserById(req, res, next) {
  const { userId } = req.params;
  try {
    const response = await UserRepo.findById(userId);

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: response.data,
        error: null,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function editUser(req, res, next) {
  const { _id } = req.user;
  const { userName, image } = req.body;
  try {
    const response = await UserRepo.editUser({ _id, userName, image });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: response.data,
        error: null,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  signOut: signOut,
  getUserById: getUserById,
  editUser: editUser,
};
