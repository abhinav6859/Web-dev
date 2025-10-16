const content = "Hello, World!";
const fs = require('fs');
fs.readFileSync('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

fs.writeFileSync('hello.txt', content);

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});