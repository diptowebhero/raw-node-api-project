//dependencies
const {
  usersRouteHandler,
} = require("./handler/routesHandler/usersRouteHandler");

const routes = {
  users: usersRouteHandler,
};

//export
module.exports = routes;
