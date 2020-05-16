const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', (req, res, next) => {
    try {
        // TODO: Implement login action (get the user if it exist with entered credentials)
        const user = AuthService.login(el => el.email === req.body.email);

        if (!user)
            throw Error('User not found');

        const isCredentialsValid = AuthService.checkCredentials(req.body, user);
        
        if (isCredentialsValid)
            res.data = user;
        else
            throw Error('Wrong password!');
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;