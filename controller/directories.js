const models = require('../models')
const directoriesModel = models.directories;

/**
 * GET /api/v1/directories/
 * 
 * @param {number} page_number - the pagination page number 
 * @return {Array} directories details
 */
async function getDirectories(req, response) {
    // TODO:
    const pageNumber = req.query.page_number;

    const result = await directoriesModel.findAll();

    return response.status(200).send(result);
}

/**
 * POST /api/v1/directories/parent_dir
 * 
 * @param {string} name - directory name 
 * @return {object} created directory
 */
async function addParentDirectory(req, response) {
    const { name } = req.body;

    const createdDirectory = await directoriesModel.create({
        name
    });

    return response.status(200).send(createdDirectory);
}

/**
 * POST /api/v1/directories/sub_dir
 * 
 * @param {string} name - directory name 
 * @param {number} parent_id - directory parent_id
 * @return {object} created directory
 */
async function addSubDirectory(req, response) {
    const { name } = req.body;
    const parentId = req.body.parent_id;

    const createdDirectory = await directoriesModel.create({
        name,
        parent_id: parentId
    });

    return response.status(200).send(createdDirectory);
}

/**
 * DELETE /api/v1/directories/:id
 * 
 * @param {number} id - directory id (param parameter)
 * @return {number} 200 status
 */
async function deleteDirectory(req, response) {
    const { id } = req.params;
    await directoriesModel.destroy({
        where: { id }
    });

    return response.status(200).send('deleted!');
}

module.exports = { getDirectories, addParentDirectory, addSubDirectory, deleteDirectory };