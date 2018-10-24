const config = require('../../lib/config');	
const mysql = require('mysql');
var pool = mysql.createPool(config.database);
/**
 * @param {Object} options
 * @param {Object} options.body Item that needs to be added to the item list
 * @throws {Error}
 * @return {Promise}
 */
module.exports.addItem = async (options) => {
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
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'addItem ok!'
  };
};

/**
 * @param {Object} options
 * @param {Integer} options.itemId ID of item to return
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getItemById = async (options) => {
  return new Promise( ( resolve, reject ) => {
    pool.query('SELECT * FROM items WHERE item_id = ?;', options.itemId, (err, result) => {
        if (err) {
          console.log("[mysql error]",err);
          return reject(err);
        }
        
        console.log(result);
        resolve({
          status: 200,
          data: result
        });
    });
  });
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
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  // return {
  //   status: 200,
  //   data: await result
  // };
};

/**
 * @param {Object} options
 * @param {Integer} options.itemId ID of item that needs to be updated
 * @param {Object} options.body Item object that needs to be added to the item list
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updateItemWithForm = async (options) => {
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
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'updateItemWithForm ok!'
  };
};

/**
 * @param {Object} options
 * @param {Integer} options.itemId Item id to delete
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteItem = async (options) => {
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
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'deleteItem ok!'
  };
};

