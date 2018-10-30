const express = require('express');
const items = require('../services/items');

const router = new express.Router();

/**
 * Add a new item to the item list
 */
router.post('/', async (req, res, next) => {
  const options = {
    body: req.body
  };

  try {
    const result = await items.addItem(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns a list of items
 */
router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await items.getAllItem(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Returns a single item
 */
router.get('/:itemId', async (req, res, next) => {
  const options = {
    itemId: req.params.itemId
  };

  try {
    const result = await items.getItemById(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Updates a item in the item list with form data
 */
router.put('/:itemId', async (req, res, next) => {
  const options = {
    itemId: req.params.itemId,
    body: req.body
  };

  try {
    const result = await items.updateItemWithForm(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

/**
 * Deletes a item
 */
router.delete('/:itemId', async (req, res, next) => {
  const options = {
    itemId: req.params.itemId
  };

  try {
    const result = await items.deleteItem(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(err.status).send({
      status: err.status,
      error: err.error
    });
  }
});

module.exports = router;
