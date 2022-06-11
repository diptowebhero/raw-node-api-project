//dependencies
const url = require("url");
const {
  notFoundRouteHandler,
} = require("../handler/routesHandler/notFoundRouteHandler");
const routes = require("../routes");
//module wrapper
const handler = {};

handler.reqResHandler = (req, res) => {
  //handle req & get url & parsing
  const method = req.method;
  const headersObj = req.headers;
  const urlObj = url.parse(req.url, true);
  const queryObj = urlObj.query;
  const path = urlObj.pathname;
  const formattedPath = path.replace(/^\/+|\/+$/g, "");

  //
  const reqProperties = {
    method,
    headersObj,
    path,
    formattedPath,
    queryObj,
  };

  const acceptableContentType = ["application/json", "text/plain"];
  let payload = "";
  if (acceptableContentType.includes(headersObj["content-type"])) {
    const realData = [];
    req.on("data", (buffer) => {
      realData.push(buffer);
      const chosenHandler = routes[formattedPath]
        ? routes[formattedPath]
        : notFoundRouteHandler;
      chosenHandler(
        reqProperties,
        (reqProperties,
        (statusCode, payload) => {
          statusCode = typeof statusCode === "number" ? statusCode : 500;
          payload = typeof payload === "object" ? payload : {};
          const stringifyPayLoadingData = JSON.stringify(payload);
          res.writeHead(statusCode);
          res.write(stringifyPayLoadingData)
          res.end();
        })
      );
    });
    req.on("end", () => {
      payload += Buffer.concat(realData).toString();
      console.log(payload);
      res.end("Hello World");
    });
  }
};

//export
module.exports = handler;
