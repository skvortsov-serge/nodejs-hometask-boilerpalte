const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.get('/', (req, res, next) => {
  try {
    const data = FighterService.getAllFighters();

    if (!data)
      throw Error('No fighters found');

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
    const fighter = FighterService.getFighter(id);

    if (!fighter)
      throw Error('No fighter found');

    res.data = fighter;
  } catch(err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.put('/:id', updateFighterValid, (req, res, next) => {
  try {
    const id = req.params.id;
    const data = FighterService.update(id, req.body);
    
    if (!data)
      throw Error('Something went wrong while updating fighter');

    res.data = data;
  } catch(err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.post('/', createFighterValid, (req, res, next) => {
  try {
    const data = FighterService.create(req.body);

    if (!data)
        throw Error('Fighter with such a name is already exist');

    res.data = data
  } catch (err) {
      res.err = err;
  } finally {
      next();
  }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const data = FighterService.delete(id);

    if (!data)
      throw Error('Something went wrong while deleting fighter');

    res.data = data;    
  } catch(err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

module.exports = router;