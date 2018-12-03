/**
 * @param {Object} req
 * @throws {Error}
 * @return {Promise}
 */
module.exports.validateBody = (req, res, next) => {
  const body = req.body;
  if (Object.keys(body).length === 0 && body.constructor === Object) {
    return res.status(404).send({
      status: 404,
      error: 'Request body is empty.'
    });
  }
  next();
};