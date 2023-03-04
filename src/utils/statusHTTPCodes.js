const statusHTTP = {
  OK: 200,
  CREATED: 201,
  ANAUTHORIZED: 401,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};

const mapError = (type) => statusHTTP[type];

module.exports = {
  statusHTTP,
  mapError,
};