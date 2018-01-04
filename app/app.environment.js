function Environment(envServiceProvider) {
    envServiceProvider.config({
        domains: {
            development: ['localhost'],
            production: ['example.com', '*.example.com']
        },
        vars: {
            development: {
                apiUrl: '//api.example.dev.local/v1',
                staticUrl: '//static.example.dev.local'
            },
            production: {
                apiUrl: '//api.example.com/v1',
                staticUrl: '//static.example.com'
            },
            defaults: {
                apiUrl: '//api.default.com/v1',
                staticUrl: '//static.default.com'
            }
        }
    });
    envServiceProvider.check();
}

Environment.$inject = ['envServiceProvider'];

export default Environment;