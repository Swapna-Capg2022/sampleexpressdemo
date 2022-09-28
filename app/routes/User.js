const express = require('express')
const UserController = require('../controllers/UserController')
const router =  express.Router();

router.get('/list',UserController.findAll);
router.post('/',UserController.create);
router.get('/:id',UserController.findOne);
router.delete('/:id',UserController.destroy);
router.put('/:id',UserController.update);

module.exports = router