const UserService = require('./userService');

class AuthService {
    login(userData) {
        const user = UserService.search(userData);
        if(!user) {
            throw Error('User not found');
        }
        return user;
    }

    checkCredentials(data, user) {
        const { password, email } = data;

        return (user.password === password && user.email === email);
    }
}

module.exports = new AuthService();