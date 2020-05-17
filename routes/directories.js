const express = require('express');
const directoriesController = require('../controller/directories');
const router = express.Router();

router.get('/', directoriesController.getDirectories);
router.get('/:parent_id/sub', directoriesController.getSubDirectories);
router.get('/search', directoriesController.search);

router.post('/parent_dir', directoriesController.addParentDirectory);
router.post('/sub_dir', directoriesController.addSubDirectory);

router.delete('/:id', directoriesController.deleteDirectory);


module.exports = router;
