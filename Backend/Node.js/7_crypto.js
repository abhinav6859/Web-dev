const crypto = require('crypto');

// Create a SHA256 hash
const hash = crypto.createHash('sha256');
hash.update('Hello, World!');
hash.update('Hello, Node.js!');
const digest = hash.digest('hex');
console.log(digest);