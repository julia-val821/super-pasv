import supertest from 'supertest';

class ConfigHelper {
    constructor() {
        this.response = null;
}

    async wipeData(){
        await supertest(process.env.BASE_URL)
            .delete('/config')
            .set('Authorization', process.env.TOKEN)
            .then((res) => { this.response = res });
        return this.response;
    }
}
export default ConfigHelper;