const { mapError } = require('../utils/statusHTTPCodes');

const errorMiddleware = (error, _req, res, _next) => res
  .status(mapError(error.status))
  .json({ message: error.message });

module.exports = errorMiddleware;