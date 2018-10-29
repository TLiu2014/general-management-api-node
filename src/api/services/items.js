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
  const body = options.body;
  return new Promise( ( resolve, reject ) => {
    pool.query('INSERT INTO items (item_id, name, value) VALUES (?);', [Object.values(body)], (err, result) => {
        if (err) {
          return reject({
            status: 500,
            error: err
          });
        }
        
        resolve({
          status: 200,
          data: result
        });
    });
  });
};

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getAllItem = async (options) => {
  return new Promise( ( resolve, reject ) => {
    pool.query('SELECT * FROM items;', (err, result) => {
        if (err) {
          return reject({
            status: 500,
            error: err
          });
        }
        
        resolve({
          status: 200,
          data: result
        });
    });
  });
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
          return reject({
            status: 500,
            error: err
          });
        }
        
        resolve({
          status: 200,
          data: result
        });
    });
  });
};

/**
 * @param {Object} options
 * @param {Integer} options.itemId ID of item that needs to be updated
 * @param {Object} options.body Item object that needs to be added to the item list
 * @throws {Error}
 * @return {Promise}
 */
module.exports.updateItemWithForm = async (options) => {
  const body = options.body;
  
  return new Promise( ( resolve, reject ) => {
    pool.query('UPDATE items SET item_id = ? ,name = ?, value = ? WHERE item_id = ?;', [...Object.values(body), options.itemId], (err, result) => {
        if (err) {
          return reject({
            status: 500,
            error: err
          });
        }
        
        resolve({
          status: 200,
          data: result
        });
    });
  });
};

/**
 * @param {Object} options
 * @param {Integer} options.itemId Item id to delete
 * @throws {Error}
 * @return {Promise}
 */
module.exports.deleteItem = async (options) => {
  return new Promise( ( resolve, reject ) => {
    pool.query('DELETE FROM items WHERE item_id = ?;', options.itemId, (err, result) => {
        if (err) {
          return reject({
            status: 500,
            error: err
          });
        }
        
        resolve({
          status: 200,
          data: result
        });
    });
  });
};

