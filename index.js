const http = require("http");

const dataControl = (req, res) => {
  res.write("<h1>Hello World, Ali Azeem Here</h1>");
  res.end();
};

http.createServer(dataControl).listen(6900);
