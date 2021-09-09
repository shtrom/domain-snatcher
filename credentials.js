var ovh = require('ovh')({
  endpoint: 'ovh-eu',
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET
});

ovh.request('POST', '/auth/credential', {
  'accessRules': [
    { 'method': 'GET', 'path': '/order/cart/*'},
    { 'method': 'POST', 'path': '/me/order/*'},
    { 'method': 'POST', 'path': '/order/cart/*'},
    { 'method': 'DELETE', 'path': '/order/cart/*'}
  ]
}, function (error, credential) {
  console.log(error || credential);
});
