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

router.get('/', (req, res, next) => {
  try {
    const data = UserService.getAllUsers();

    if (!data)
      throw Error('No users found');

    res.data = data;
  } catch(err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const user = UserService.getUser(id);

    if (!user)
      throw Error('No user found');

    res.data = user;
  } catch(err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.put('/:id', updateUserValid, (req, res, next) => {
  try {
    const id = req.params.id;
    const data = UserService.update(id, req.body);
    
    if (!data)
      throw Error('Something went wrong while updating user');

    res.data = data;
  } catch(err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const data = UserService.delete(id);

    if (!data)
      throw Error('Something went wrong while deleting user');

    res.data = data;    
  } catch(err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

module.exports = router;