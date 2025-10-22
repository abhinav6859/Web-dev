const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

//GET request handling
// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to the Home Page</h1>');
//     } 
//     else if (req.method === 'GET' && req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>About Us</h1><p>This is the about page.</p>');
//     } 
//     else if (req.method === 'GET' && req.url === '/file') {
//         const filePath = path.join(__dirname, 'content', 'sample.txt');
//         const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });

//         readableStream.on('error', () => {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Error reading file.');
//         });

//         readableStream.pipe(res);
//     } 
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
//     }
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });



//POST request handling
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST' && req.url === '/') {
//         let body = '';

//         req.on('data', chunk => {
//             body += chunk.toString();
//         })

//         req.on('end', () => {
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ message: `Received databvghc: ${body}` }));
//         })
//     } 
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
//     }
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });


//Handling different routes and methods
// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to the Home Page</h1>');
//     } else if (req.method === 'GET' && req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>About Us</h1><p>This is the about page.</p>');
//     } else if (req.method === 'POST' && req.url === '/data') {
//         let body = '';

//         req.on('data', chunk => {
//             body += chunk.toString();
//         });     
//         req.on('end', () => {
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ message: `Received data: ${body}` }));
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
//     }
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });

//query parameters handling
// const server = http.createServer((req, res) => {
//     const url = new URL(req.url, `http://${req.headers.host}`);
//     const name = url.searchParams.get('name');
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: `Hello, ${name}!` }));
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });



//Routing with a simple router
// const routes = {
//     '/': (req, res) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to the Home Page</h1>');
//     },
//     '/about': (req, res) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>About Us</h1><p>This is the about page.</p>');
//     },
//     '/notfound': (req, res) => {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
//     },
// };

// const server = http.createServer((req, res) => {
//    const { pathname } = url.parse(req.url);
//  if (routes[pathname]) {
//         routes[pathname](req, res);
//     } else {
//         routes['/notfound'](req, res);
//     }
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });


// dynamic routing
// const server = http.createServer((req, res) => {
//     const { pathname } = url.parse(req.url, true);
//   if (pathname.startsWith('/user/')) {
//         const userId = pathname.split('/')[2];
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: `User ID requested: ${userId}` }));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
//     }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });


// // Middleware-like functionality
// function logRequest(req, res, next) {
//     console.log(`${new Date().toISOString()} - ${req.method} request made to: ${req.url}`);
//     next(req, res);
// }

// const server = http.createServer((req, res) => {
//     logRequest(req, res, (req, res) => {
//       const { pathname } = url.parse(req.url);
//        if (pathname.startsWith('/user/')) {
//        const userId = pathname.split('/')[2];
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: `User ID requested: ${userId}` }));
//      } else {
//          res.writeHead(404, { 'Content-Type': 'text/html' });
//          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
//      }
//     });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });



//Form Submission Handling
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = querystring.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Form submitted successfully! Hello", formData }));
        });
    }
});

        const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
