const url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myUrl);
console.log('Hostname:', myUrl.hostname); // mywebsite.com
console.log('Pathname:', myUrl.pathname); // /hello.html
// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Search Params
console.log(myUrl.searchParams);