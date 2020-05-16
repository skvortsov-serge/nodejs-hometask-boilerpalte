const { user } = require('../models/user');

const createUserValid = (req, res, next) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    if (!firstName || !firstName.length) {
        res.status(400).send({ error: true, message: 'Name can\'t be empty' });
        return;
    }

    if (!lastName || !lastName.length) {
        res.status(400).send({ error: true, message: 'Last name can\'t be empty' });
        return;
    }
    
    if (!validateEmail(email)) {
        res.status(400).send({ error: true, message: 'Please, use only gmail mails' });
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        res.status(400).send({ error: true, message: 'Wrong phone number, please use +380xxxxxxxxx pattern' });
        return;
    }

    if (!password || !password.length) {
        res.status(400).send({ error: true, message: 'Password can\'t be empty' });
        return;
    }

    if (password.length < 3) {
        res.status(400).send({ error: true, message: 'Use at least 3 characters for your password' });
        return;
    }

    next();
}

const updateUserValid = (req, res, next) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    if (firstName && !firstName.length) {
        res.status(400).send({ error: true, message: 'Name can\'t be empty' });
        return;
    }

    if (lastName && !lastName.length) {
        res.status(400).send({ error: true, message: 'Last name can\'t be empty' });
        return;
    }
    
    if (email && !validateEmail(email)) {
        res.status(400).send({ error: true, message: 'Please, use only gmail mails' });
        return;
    }

    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
        res.status(400).send({ error: true, message: 'Wrong phone number, please use +380xxxxxxxxx pattern' });
        return;
    }

    if (password && !password.length) {
        res.status(400).send({ error: true, message: 'Password can\'t be empty' });
        return;
    }

    if (phoneNumber && password.length < 3) {
        res.status(400).send({ error: true, message: 'Use at least 3 characters for your password' });
        return;
    }

    next();
}

const validateEmail = (email) => {
    const regex = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/ig;

    return regex.test(email);
}

const validatePhoneNumber = (phone) => {
    const regex = /^(\+380)?(\d{9}$)/g;

    return regex.test(phone);
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;