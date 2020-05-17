const models = require('../models')
const filesModel = models.files;

/**
 * GET /api/v1/files?page_number=<value>
 * 
 * @param {number} page_number - the pagination page number (query param)
 * @return {Array} files details
 */
async function getFiles(req, response) {
    try {
        const pageNumber = req.query.page_number || 0;

        const offset = pageNumber * 10 // 20 is the page size

        const result = await filesModel.findAll({
            limit: 20,
            offset,
            include: [{
                model: models.directories,
                as: 'directory'
            }]
        });

        return response.status(200).send(result);
    } catch (error) {
        return response.status(500).send(error);
    }
}

/**
 * DELETE /api/v1/files/:id
 * 
 * @param {number} id - file id (param parameter)
 * @return {number} 200 status
 */
async function deleteFile(req, response) {
    try {
        const { id } = req.params;
        await filesModel.destroy({
            where: { id }
        });

        return response.status(200).send('deleted!');
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = { getFiles, deleteFile };