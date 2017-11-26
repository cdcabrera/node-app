
const { execSync }      = require('child_process');
const { name, version } = require('./package');
const config            = (require('yargs').argv.prod) ? require('./config/production') : require('./config/development');
const app               = require('./src/app');
const tagVersion        = execSync('git tag -l v* | tail -n1\n', { timeout:1000 }).toString();


app(Object.assign(config, {

    name: name || config.name,
    version: tagVersion || version || config.version

}));

