const { UserRepository } = require('../repositories/userRepository');

class UserService {
    create(data) {
        const isUserPresent = this.search(el => el.email === data.email);

        if (isUserPresent)
            return null;

        const user = UserRepository.create(data);

        return user;
    }
        
    search(search) {
        const item = UserRepository.getOne(search);

        if(!item)
            return null;

        return item;
    }

    getUser(id) {
        const user = this.search(el => el.id === id);

        if (!user)
            return null;

        return user;
    }

    getAllUsers() {
        const data = UserRepository.getAll();

        if (!data.length)
            return null;

        return data;
    }

    update(id, data) {
        const updatedData = UserRepository.update(id, data);

        if(!updatedData)
            return null;

        return updatedData;
    }

    delete(id) {
        const data = UserRepository.delete(id);

        if(!data)
            return null;

        return data;
    }
}

module.exports = new UserService();