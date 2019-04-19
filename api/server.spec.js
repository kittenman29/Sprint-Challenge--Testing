const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {

        it('should respond with 200 OK', () => {
            return request(server)
               .get('/')
               .then(response => {
               expect(response.status).toBe(200);
            });
        });

        it('should return JSON', () => {
            return request(server)
               .get('/')
               .then(res => {
                expect(res.type).toBe('application/json')
                })
        });

        it('should return {api: "up"}', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api: "up"});
            });
        });
    })
})