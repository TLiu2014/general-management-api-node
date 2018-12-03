/**
 * @param {Object} req
 * @throws {Error}
 * @return {HTTP response}
 */
module.exports.validatePostBody = (req, res, next) => {
  const body = req.body;
  if (Object.keys(body).length === 0 && body.constructor === Object) {
    return res.status(404).send({
      status: 404,
      error: 'Not found: Request body is empty.'
    });
  }
  next();
};

const putBodyKeySize = 2;
/**
 * @param {Object} req
 * @throws {Error}
 * @return {HTTP response}
 */
module.exports.validatePutBody = (req, res, next) => {
  const body = req.body;
  var err = '';
  if (Object.keys(body).length === 0 && body.constructor === Object) {
    return res.status(404).send({
      status: 404,
      error: 'Not found: Request body is empty.'
    });
  } else if (!body.hasOwnProperty('name')) {
    err = 'Requst body missing \'name\'.';
  } else if (!body.hasOwnProperty('value')) {
    err = 'Requst body missing \'value\'.';
  } else if (body.hasOwnProperty('name') && body.hasOwnProperty('name') && Object.keys(body).length > putBodyKeySize) {
    err = 'Requst body contains too many attributes, should contain only \'name\' and \'value\'.';
  }
  if (err) {
    return res.status(400).send({
      status: 400,
      error: 'Bad Request: ' + err
    });
  }
  next();
};