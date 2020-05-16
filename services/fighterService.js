const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    create(data) {
        const isFighterPresent = this.search(el => el.name === data.name);

        if (isFighterPresent)
            return null;

        const fighter = FighterRepository.create(data);

        return fighter;
    }

    search(search) {
        const item = FighterRepository.getOne(search);

        if(!item)
            return null;

        return item;
    }

    getFighter(id) {
        const fighter = this.search(el => el.id === id);

        if (!fighter)
            return null;

        return fighter;
    }

    getAllFighters() {
        const data = FighterRepository.getAll();

        if (!data.length)
            return null;

        return data;
    }

    update(id, data) {
        const updatedData = FighterRepository.update(id, data);

        if(!updatedData)
            return null;

        return updatedData;
    }

    delete(id) {
        const data = FighterRepository.delete(id);

        if(!data)
            return null;

        return data;
    }
}

module.exports = new FighterService();