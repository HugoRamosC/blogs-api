const statusHTTP = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  ANAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const mapError = (type) => statusHTTP[type];

module.exports = {
  statusHTTP,
  mapError,
};