const errorHandlerMiddleware = (error, req, res, next) =>
  res.status(500).json({ msg: 'Something definitely went wrong!!!' });

module.exports = errorHandlerMiddleware;
