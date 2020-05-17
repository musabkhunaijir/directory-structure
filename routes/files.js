const express = require('express');
const filesController = require('../controller/files');
const router = express.Router();

router.get('/', filesController.getFiles);

router.delete('/:id', filesController.deleteFile);


module.exports = router;
