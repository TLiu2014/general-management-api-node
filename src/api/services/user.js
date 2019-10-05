const ServerError = require('../../lib/error');
const config = require('../../lib/config');	
const mysql = require('mysql');
const uniqid = require('uniqid');
var pool = mysql.createPool(config.database);
/**
 * @param {Object} options
 * @param {Object} options.body Created user object
 * @throws {Error}
 * @return {Promise}
 */
module.exports.createUser = async (options) => {
  const body = options.body;
  const userId = uniqid.time();
  return new Promise( ( resolve, reject ) => {
    pool.query('INSERT INTO users (user_id, username, password) VALUES (?);', [[userId, body.username, body.password]], (err, result) => {
        if (err) {
          return reject({
            status: 500,
            error: err
          });
        }
        
        resolve({
          status: 200,
          data: {
            user_id: user_id,
            username: body.username,
            password: body.password
          }
        });
    });
  });
};

/**
 * @param {Object} options
 * @param {Array} options.body List of user object
 * @throws {Error}
 * @return {Promise}
 */
module.exports.createUsersWithArrayInput = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'createUsersWithArrayInput ok!'
  };
};

/**
 * @param {Object} options
 * @param {Array} options.body List of user object
 * @throws {Error}
 * @return {Promise}
 */
module.exports.createUsersWithListInput = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'createUsersWithListInput ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.username The user name for login
 * @param {String} options.password The password for login in clear text
 * @throws {Error}
 * @return {Promise}
 */
module.exports.loginUser = async (options) => {
  console.log(options);
  const username = options.body.username;
  const password = options.body.password;
  
  return new Promise( ( resolve, reject ) => {
    pool.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      return reject({
        status: 400,
        error: err
      });
    }else{
      console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].password === password){
          resolve({
            status: 200,
            data: {
              success: 'Login successful!'
            }
          });
        }
        else{
          return reject({
            status: 401,
            error: 'Username and password does not match.'
          });
        }
      }
      else{
        return reject({
          status: 401,
          error: 'Username does not exist.'
        });
      }
    }
  });
});
};

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.logoutUser = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'logoutUser ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.username The name that needs to be fetched. Use user1 for testing. 
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUserByName = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'getUserByName ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.username name that need to be updated
 * @param {Object} options.body Updated user object
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updateUser = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'updateUser ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.username The name that needs to be deleted
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteUser = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'deleteUser ok!'
  };
};

