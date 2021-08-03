import supertest from 'supertest';

class UsersHelper {
    constructor() {
        this.response = null;
    }
    async create(){
        await supertest(process.env.BASE_URL)
            .post('/users')
            .set('Authorization', process.env.TOKEN)
            .then((res) => { this.response = res });
        return this.response;
    }

    async getSpecific(id) {
        await supertest(process.env.BASE_URL)
            .get(`/users?id=${id}`)
            .set('Authorization', process.env.TOKEN)
            .then((res) => { this.response = res });
        return this.response;
    }

    async getAll() {
        await supertest(process.env.BASE_URL)
            .get('/users')
            .set('Authorization', process.env.TOKEN)
            .then((res) => { this.response = res });
        return this.response;
    }

    async delete(id) {
        await supertest(process.env.BASE_URL)
            .delete('/users')
            .send({ id: id })
            .set('Authorization', process.env.TOKEN)
            .then((res) => { this.response = res });
        return this.response;
    }
}

export default UsersHelper;