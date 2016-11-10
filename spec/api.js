require('jasmine'); //jasmine will insert some methods and a global object in node
// describe
// it
// expect

var server = require('../server.js');
var baseURL = 'http://localhost:3000';
var request = require('request');


describe('Server API', () => {
    var endpoint = '{$baseURL}/api';

    it('should return a status of 200', (done) => {
        request.get(endpoint, (err, response, body) => {
            expect(response.statusCode).toBe(200);
            done();

        });
    })
});
