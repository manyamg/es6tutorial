const axios = require('axios')
const chalk = require('chalk')
const moment = require('moment')


axios.interceptors.request.use(function (config) {
    {
        console.log(chalk.yellow('[REQUEST: ]') + ' '
            + chalk.red(`[${moment().format('YYYY-MM-DD:hh:mm:ss')}]`) + ' '
            + chalk.red(config.method.toUpperCase()) + ' '
            + chalk.green(`header:${JSON.stringify(config.headers)}`)
        );
    }
    return config;
}), (error) => {
        console.log(chalk.yellow('[REQUEST123]') + ' '
            + chalk.white(`[${moment().format('YYYY-MM-DD:hh:mm:ss')}]`) + ' '
            + chalk.yellow(error.request.method.toUpperCase()) + ' '
            + chalk.white(`${error.response.status}:${error.response.statusText}`) + ' '
            + chalk.blue(error.request.path) + ' '
            + chalk.white(`header:${JSON.stringify(error.response.headers)}`)
        );
    return Promise.reject(error);
};


axios.interceptors.response.use((response) => {
        console.log(chalk.yellow('[RESPONSE123:]') + ' '
            + chalk.white(`[${moment().format('YYYY-MM-DD:hh:mm:ss')}]`) + ' '
            + chalk.yellow(response.request.method) + ' '
            + chalk.white(`${response.status}:${response.statusText}`) + ' '
            + chalk.blue(response.request.path) + ' '
            + chalk.white(`header:${JSON.stringify(response.headers)}`)
        );

    return response;
}, (error) => {
        const status = (error.response && error.response.status) ? `${error.response.status}:${error.response.statusText}` : `${error.code}:${error.message}`;
        const method = (error.response && error.request.method) ? error.request.method.toUpperCase() : error.request._options.method.toUpperCase();
        const reqPath =  (error.response && error.response.request) ? error.response.request.path : error.request._options.path;
        const header = (error.response && error.response.headers) ? error.response.headers : error.request._options.headers;
        console.log(chalk.yellow('[RESPONSE:]') + ' '
            + chalk.white(`[${moment().format('YYYY-MM-DD:hh:mm:ss')}]`) + ' '
            + chalk.yellow(method) + ' '
            + chalk.white(status) + ' '
            + chalk.blue(reqPath) + ' '
            + chalk.white(`header:${JSON.stringify(header)}`)
        );
    return Promise.reject(error);
});


axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
        id: 1
    }
}).then(function(request) {
    console.log(request)
});
