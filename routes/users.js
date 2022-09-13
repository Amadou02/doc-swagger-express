const express = require('express')
const router = express.Router()

const userCtrl = require('./../controllers/users')

/* GET home page. */
router.get('/', userCtrl.getAll);
router.get('/:id', userCtrl.getOne);
router.post('/:id', userCtrl.create);
router.delete('/:id', userCtrl.deleteOne);

module.exports = router
