const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    create(data) {
			const isUserPresent = this.search(el => el.email === data.email);

			if (isUserPresent)
				return null;

			const user = UserRepository.create(data);
			return user;
		}

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();