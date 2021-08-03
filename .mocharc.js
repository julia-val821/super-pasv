module.exports = {
    require: '@babel/register',
    spec: 'tests/**/*.spec.js',
    file: 'config/server.js',
    timeout: 15000
}