const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/', createUserValid, (req, res, next) => {
  try {
    const data = UserService.create(req.body);

    if (!data)
        throw Error('User with such an email is already exist');

    res.data = data
  } catch (err) {
      res.err = err;
  } finally {
      next();
  }
}, responseMiddleware);

// TODO: Implement route controllers for user

module.exports = router;