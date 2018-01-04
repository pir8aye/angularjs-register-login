function Environment(envServiceProvider) {
    envServiceProvider.config({
        domains: {
            development: ['localhost'],
            production: ['example.com', '*.example.com']
        },
        vars: {
            development: {
                apiUrl: '//api.example.dev.local/v1',
                staticUrl: '//static.example.dev.local',
                firebaseConfig: {
                    apiKey: '<your-api-key>',
                    authDomain: '<your-auth-domain>',
                    databaseURL: '<your-database-url>',
                    storageBucket: '<your-storage-bucket>'
                }
            },
            production: {
                apiUrl: '//api.example.com/v1',
                staticUrl: '//static.example.com',
                firebaseConfig: {
                    apiKey: '<your-api-key>',
                    authDomain: '<your-auth-domain>',
                    databaseURL: '<your-database-url>',
                    storageBucket: '<your-storage-bucket>'
                }
            }
        }
    });
    envServiceProvider.check();
}

Environment.$inject = ['envServiceProvider'];

export default Environment;