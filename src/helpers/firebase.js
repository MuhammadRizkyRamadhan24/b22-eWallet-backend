const admin = require('firebase-admin');
const serviceAccount = require('../config/e-wallet-push-notification-firebase-adminsdk-b1kcz-1478b43bed.json');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebase;
