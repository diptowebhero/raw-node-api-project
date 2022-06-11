const data = require("../../helper/lib/data");

//testing  CRUD operation
const data2 = {
  name: "Javascript",
};

// data.create("check", "test", data1, (err) => {
//   if (!err) {
//     console.log("File create successfully");
//   } else {
//     console.log(err.message);
//   }
// });

// data.read("check", "test", (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err.message);
//   }
// });

// data.update("check", "test", data2, (err, data) => {
//   if (!err) {
//     console.log("file updated successfully");
//   } else {
//     console.log(err.message);
//   }
// });

// data.delete("check", "test", (err) => {
//   if (!err) {
//     console.log("file delete successfully");
//   } else {
//     console.log(err.message);
//   }
// });

//module wrapper
const handler = {};

handler.usersRouteHandler = (reqProperties, callback) => {
  callback(200, {
    message: "this is users route",
  });
};
//export
module.exports = handler;
