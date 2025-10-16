const lodash = require('lodash');
const fs = require('fs');
const path = require('path');

// Lodash examples
// const array = [1, 2, 3, 4, 5, 6];
// const chunkedArray = lodash.chunk(array, 2);
// console.log('Chunked:', chunkedArray);

// const reversedArray = lodash.reverse([...array]);
// console.log('Reversed:', reversedArray);




// File system example
// const samplePath = path.join(__dirname, 'content', 'sample.txt');
// console.log('Reading file from:', samplePath);
// const readableStream = fs.createReadStream(samplePath, { encoding: 'utf8' })

// readableStream.on('data', (chunk) => {
//     console.log('New chunk received:');
//     console.log(chunk);
// })

// readableStream.on('end', () => {
//     console.log('No more data to read.');
// })

// readableStream.on('error', (err) => {
//     console.error('Error reading the file:', err);
// })
// const writableStream = fs.createWriteStream(path.join(__dirname, 'content', 'output.txt'));
// writableStream.write('This is a line written to the file.\n');
// writableStream.write('This is another line.\n');
// writableStream.end('Finished writing to the file.\n');

// writableStream.on('finish', () => {
//     console.log('All data has been written to the file.');
// });


// Pipe example
// const sourcePath = path.join(__dirname, 'content', 'sample.txt');
// const destinationPath = path.join(__dirname, 'content', 'pipedOutput.txt');

// const readableStream = fs.createReadStream(sourcePath);
// const writableStream = fs.createWriteStream(destinationPath);

// readableStream.pipe(writableStream);
// console.log('Piping data from sample.txt to pipedOutput.txt');

// writableStream.on('finish', () => {
 //     console.log('Piping completed. Data has been written to pipedOutput.txt');
// });



// create a directory
// const dirPath = path.join(__dirname, 'content', 'newDir');
// fs.mkdir(dirPath, (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//     } else {
//         console.log('Directory created successfully:', dirPath);
//     }
// });

// fs.mkdirSync(path.join(__dirname, 'content', 'newDirSync'));
// console.log('Directory created successfully:', path.join(__dirname, 'content', 'newDirSync'));
// // remove a directory
// fs.rmdir(dirPath, (err) => {
//     if (err) {
//         console.error('Error removing directory:', err);
//     } else {
//         console.log('Directory removed successfully:', dirPath);
//     }
// });


//reading a directory

// const dirToRead = path.join(__dirname, '/');
// fs.readdir(dirToRead, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//     } else {
//         console.log('Files in directory:', files);
//     }
// });



// file exists
// const filePath = path.join(__dirname, 'content', 'sample.txt');
// fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//         console.error('File does not exist:', err);
//     } else {
//         console.log('File exists:', filePath);
//     }
// });




// directory status
// const dirPath = path.join(__dirname, 'content');  
// fs.stat(dirPath, (err, stats) => {
//     if (err) {
//         console.error('Error getting directory status:', err);  
//     } else {
//         console.log('Directory status:', stats);
//     }
// });



// watching a file for changes
// const filePath = path.join(__dirname, 'content', 'sample.txt');
// fs.watch(filePath, (eventType, filename) => {
//     if (filename) {
//         console.log(`File ${filename} has been changed. Event type: ${eventType}`);
//     } else {
//         console.log('Filename not provided');
//     }
// });


