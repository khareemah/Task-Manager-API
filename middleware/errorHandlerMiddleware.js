const { CustomAPIError } = require('../errors/custom-error');
const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCose).json({ msg: error.message });
  }
  res.status(500).json({ msg: 'Something went wrong!!! Try again later!!!' });
};

module.exports = errorHandlerMiddleware;
