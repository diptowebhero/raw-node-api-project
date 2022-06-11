//dependencies
const path = require("path");
const fs = require("fs");

//module wrapper
const data = {};

//CURD operation

//create base directory
data.basedir = path.join(__dirname, "../../.data");

//create file
data.create = (dir, file, content, callback) => {
  //open file
  fs.open(path.join(data.basedir, dir, file + ".json"), "wx", (err, fd) => {
    if (!err && fd) {
      const stringifyData = JSON.stringify(content);
      fs.writeFile(fd, stringifyData, (err) => {
        if (!err) {
          fs.close(fd, (err) => {
            if (!err) {
              callback(null);
            } else {
              callback(err);
            }
          });
        } else {
          callback(err);
        }
      });
    } else {
      callback(err);
    }
  });
};

//read file
data.read = (dir, file, callback) => {
  //open file
  fs.open(path.join(data.basedir, dir, file + ".json"), "r", (err, fd) => {
    if (!err && fd) {
      fs.readFile(fd, "utf-8", (err, content) => {
        if (!err && content) {
          fs.close(fd, (err) => {
            if (!err) {
              callback(err, content);
            } else {
              callback(err);
            }
          });
        } else {
          callback(err);
        }
      });
    } else {
      callback(err);
    }
  });
};

//update file
data.update = (dir, file, content, callback) => {
  //open file
  fs.open(path.join(data.basedir, dir, file + ".json"), "r+", (err, fd) => {
    if (!err && content) {
      fs.ftruncate(fd, (err) => {
        if (!err) {
          const stringifyData = JSON.stringify(content);
          fs.writeFile(fd, stringifyData, (err) => {
            if (!err && stringifyData) {
              fs.close(fd, (err) => {
                if (!err) {
                  callback(null);
                } else {
                  callback(err);
                }
              });
            } else {
              callback(err);
            }
          });
        } else {
          callback(err);
        }
      });
    } else {
      callback(err);
    }
  });
};

//delete file
data.delete = (dir, file, callback) => {
  fs.unlink(path.join(data.basedir, dir, file + '.json'), (err) => {
    if (!err) {
      callback(null);
    } else {
      callback(err);
    }
  });
};
module.exports = data;
