const Sequelize = require('sequelize');
const models = require('../models')
const directoriesModel = models.directories;

/**
 * GET /api/v1/directories?page_number=<value>
 * 
 * @param {number} page_number - the pagination page number (query param)
 * @return {Array} directories details
 */
async function getDirectories(req, response) {
    try {
        const pageNumber = req.query.page_number || 0;

        const offset = pageNumber * 10 // 20 is the page size

        const result = await directoriesModel.findAll({
            limit: 20,
            offset,
            include: [{
                model: models.files,
                as: 'files'
            }]
        });

        return response.status(200).send(result);
    } catch (error) {
        return response.status(500).send(error);
    }
}

/**
 * GET /api/v1/directories/search?name=<value>
 * 
 * @param {number} page_number - the pagination page number (query param)
 * @return {Array} directories details
 */
async function search(req, response) {
    try {
        const pageNumber = req.query.page_number || 0;
        const { name } = req.query;

        const offset = pageNumber * 10 // 20 is the page size

        const result = await directoriesModel.findAll({
            limit: 20,
            offset,
            where: {
                name: {
                    [Sequelize.Op.like]: `%${name}%`
                }
            },
            include: [{
                model: models.files,
                as: 'files'
            }]
        });

        return response.status(200).send(result);
    } catch (error) {
        return response.status(500).send(error);
    }
}

/**
 * GET /api/v1/directories/:id/sub?page_number=<value>
 * 
 * @param {number} page_number - the pagination page number (query param)
 * @param {number} parent_id - directory parent_id (params)
 * @return {Array} directories details
 */
async function getSubDirectories(req, response) {
    try {
        const pageNumber = req.query.page_number || 0;
        const parentId = req.params.parent_id;

        const offset = pageNumber * 10 // 20 is the page size

        const result = await directoriesModel.findAll({
            limit: 20,
            offset,
            where: {
                parent_id: parentId
            },
            include: [{
                model: models.files,
                as: 'files'
            }]
        });

        return response.status(200).send(result);
    } catch (error) {
        return response.status(500).send(error);
    }
}

/**
 * POST /api/v1/directories/parent_dir
 * 
 * @param {string} name - directory name 
 * @return {object} created directory
 */
async function addParentDirectory(req, response) {
    try {
        const { name } = req.body;

        const createdDirectory = await directoriesModel.create({
            name
        });

        return response.status(200).send(createdDirectory);
    } catch (error) {
        return response.status(500).send(error);
    }
}

/**
 * POST /api/v1/directories/sub_dir
 * 
 * @param {string} name - directory name 
 * @param {number} parent_id - directory parent_id
 * @return {object} created directory
 */
async function addSubDirectory(req, response) {
    try {
        const { name } = req.body;
        const parentId = req.body.parent_id;

        const createdDirectory = await directoriesModel.create({
            name,
            parent_id: parentId
        });

        return response.status(200).send(createdDirectory);
    } catch (error) {
        return response.status(500).send(error);
    }
}

/**
 * DELETE /api/v1/directories/:id
 * 
 * @param {number} id - directory id (param parameter)
 * @return {number} 200 status
 */
async function deleteDirectory(req, response) {
    try {
        const { id } = req.params;
        await directoriesModel.destroy({
            where: { id }
        });

        return response.status(200).send('deleted!');
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = { getDirectories, search, getSubDirectories, addParentDirectory, addSubDirectory, deleteDirectory };