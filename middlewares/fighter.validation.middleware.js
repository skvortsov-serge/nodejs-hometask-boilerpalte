const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    const { name, power, defense } = req.body;

    if (!name || !name.length) {
        res.status(400).send({ error: true, message: 'Name can\'t be empty' });
        return;
    }

    if (!power || !validatePower(power)) {
        res.status(400).send({ error: true, message: 'Power should be a number and from 0 to 100' });
        return;
    }
    
    if (!defense || !validateDefense(defense)) {
        res.status(400).send({ error: true, message: 'Defense should be a number and from 1 to 10' });
        return;
    }

    next();
}

const updateFighterValid = (req, res, next) => {
    const { name, power, defense } = req.body;
    const powerNumber = parseInt(power);
    const defenseNumber = parseInt(defense);

    if (name && !name.length) {
        res.status(400).send({ error: true, message: 'Name can\'t be empty' });
        return;
    }

    if (powerNumber && !validatePower(powerNumber)) {
        res.status(400).send({ error: true, message: 'Power should be a number and from 0 to 100' });
        return;
    }
    
    if (defenseNumber && !validateDefense(defenseNumber)) {
        res.status(400).send({ error: true, message: 'Defense should be a number and from 1 to 10' });
        return;
    }

    next();
}

const validatePower = (power) => {
    const validRange = power >= 0 && power <= 100;
    return (validRange && typeof power === 'number')
}

const validateDefense = (defense) => {
    const validRange = defense >= 1 && defense <= 10;
    return (validRange && typeof defense === 'number')
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;