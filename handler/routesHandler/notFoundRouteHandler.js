//module wrapper
const handler = {};

handler.notFoundRouteHandler = (reqProperties, callback) => {
  callback(404, {
    message: "Your requested URL  is not found",
  });
};
//export
module.exports = handler;
