const express = require('express');
const router = express.Router();
const TagController = require('../controllers/tagTrigger_controller.js');
const verifyToken = require('../middleware/verifyToken.js');

router.post('/createTag',verifyToken, TagController.createTag);
router.get('/getAllTag/:userId',verifyToken,TagController.getAllTag)
router.get('/getOneTag/:id',TagController.getOneTag)
router.get('/countAllTag/:userId',TagController.countAllTag)
router.delete('/deleteTag',TagController.deleteTag)
router.patch('/addTrigger/:id',TagController.addtrigger)



module.exports = router;