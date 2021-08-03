import { config } from 'dotenv';
import supertest from 'supertest';

config();

before(async function (){
    await supertest(process.env.BASE_URL)
        .post('/auth')
        .send({ login: process.env.LOGIN, password: process.env.PASSWORD })
        .then((res) => { process.env.TOKEN = res.body.token });
});

