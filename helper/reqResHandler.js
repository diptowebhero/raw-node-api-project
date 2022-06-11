//dependencies
const url = require("url");
const { notFoundRouteHandler } = require("../handler/routesHandler/notFoundRouteHandler");
const routes = require("../routes");
//module wrapper
const handler = {};

handler.reqResHandler = (req, res) => {
  //handle req & get url & parsing
  const method = req.method;
  const headersObj = req.headers;
  const urlObj = url.parse(req.url, true);
  const path = urlObj.pathname;
  const formattedPath = path.replace(/^\/+|\/+$/g, "");

  const acceptableContentType = ["application/json", "text/plain"];
  let payload = "";
  if (acceptableContentType.includes(headersObj["content-type"])) {
    const realData = [];
    req.on("data", (buffer) => {
      realData.push(buffer);
      const chosenHandler = routes[formattedPath] ? routes[formattedPath] : notFoundRouteHandler;
      chosenHandler()
    });
    req.on("end", () => {
      payload += Buffer.concat(realData).toString();
      res.end("Hello World");
    });
  }
};

//export
module.exports = handler;
