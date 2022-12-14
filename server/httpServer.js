const http = require('http')

const httpServer = http.createServer(
  (request, response) => {
    console.log("Request Made...")

    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    // 2. Write the announced text to the body of the page
    response.write('Hello, World!\n');

    // 3. Tell the server that all of the response headers and body have been sent
    response.end();
  }
)

httpServer.listen(
  3000,
  () => console.log('Listening on Port 3000')
)