const got = require("got");

module.exports = async (req, res, next) => {
  const { body, headers } = req;

  try {
    console.log( body );
  } catch (error) {
    next(error);
  }
  
};
