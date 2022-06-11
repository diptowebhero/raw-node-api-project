//dependencies
const http = require("http");
const { reqResHandler } = require("./helper/reqResHandler");

//module wrapper
const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createserver = () => {
  const server = http.createServer(reqResHandler);
  server.listen(app.config.port, () => {
    console.log(`Server listen on port:${app.config.port}`);
  });
};

//server initialize
app.createserver()