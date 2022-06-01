const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("welcome to our homepage")
  }
  // console.log(request)
  if (request.url === "/about") {
    response.end("Here is our short history")
  } else {
    response.end("Oops")
  }
})
server.listen(5000)
