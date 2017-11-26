
const assert    = require('assert');
const app       = require('./app');


describe('Application', function() {

    let config = {
        display: 'Hello world!'
    };


    before(function () {

        if (!config.display) {

            this.skip();
        }
    });


    it('should have minimal defined config properties', function() {

        assert.ok(config.display);
    });


    it('should have methods', function() {

        let application = app(config),
            start       = application.start;

        assert.ok(start);
    });
});

