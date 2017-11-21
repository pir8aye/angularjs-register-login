import Firebase from 'firebase';

function Service() {
    Firebase.initializeApp({
        apiKey: '<your-api-key>',
        authDomain: '<your-auth-domain>',
        databaseURL: '<your-database-url>',
        storageBucket: '<your-storage-bucket>'
    });
    
    return Firebase;
}

Service.$inject = [];

export default Service;