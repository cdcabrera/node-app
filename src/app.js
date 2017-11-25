

/**
 * Initial application.
 */
class App {

    constructor (options) {

        this.options = Object.assign({

            debug: false,
            display: 'Default display message...'

        }, options);

        this.start();
    }


    /**
     * Initialize application.
     */
    start () {

        if (this.options.debug) {

            console.log('alert1', this.options);
            console.log('alert2', this.options);
            console.log('alert3', this.options);
        }
    }
}


module.exports = (opts) => new App(opts);

