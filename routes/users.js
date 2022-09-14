const express = require('express')
const router = express.Router()

const userCtrl = require('./../controllers/users')

/**
 * Spec for the route users
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *         id:
 *           type: integer
 *           readonly: true
 *       example:
 *         firstname: "John"
 *         lastname: "DOE"
 *         email: "johndoe@email.com"
 *         id: 1
 * 
 * /users:
 *   get:
 *     description: find users list
 *     summary: list all app users
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: Returns array of object.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/User"
 *   post:
 *     summary: create new app user
 *     description: this is a public operation
 *     tags:
 *       - users
 *     requestBody:
 *       description: Create user object
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     responses:
 *       201:
 *         description: new resource created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Invalid data sent'
 *       500:
 *         description: operation failed with server error
 * /users/{id}:
 *   get:
 *     description: find one user
 *     summary: user details
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           format: int11
 *           example: 2
 *     responses:
 *       200:
 *         description: Returns an object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Invalid id supplied'
 *       404:
 *         description: user not found
 *   patch:
 *     description: update one user - operation permitted for owner and admin
 *     summary: update user
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *           example: 2
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: Returns an object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Invalid id supplied''
 *       404:
 *         description: user not found
 *   put:
 *     description: update one user - operation permitted for owner and admin
 *     summary: update user
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *           example: 2
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: Returns an object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Invalid id supplied
 *       404:
 *         description: user not found
 *   delete:
 *     description: delete one user - operation permitted for owner and admin
 *     summary: delete user
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *           example: 2
 *     responses:
 *       200:
 *         description: Returns an object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Invalid id supplied
 *       404:
 *         description: user not found
*/
router.get('/', userCtrl.getAll)
router.get('/:id', userCtrl.getOne)

router.post('/', userCtrl.create)
router.delete('/:id', userCtrl.deleteOne)

module.exports = router
