const express = require('express');
const router = express.Router();
const TagController = require('../controllers/tagTrigger_controller.js')

router.post('/createTag', TagController.createTag);
router.get('/getAllTag',TagController.getAllTag)
router.get('/countAllTag',TagController.countAllTag)
router.delete('/deleteTag',TagController.deleteTag)


module.exports = router;