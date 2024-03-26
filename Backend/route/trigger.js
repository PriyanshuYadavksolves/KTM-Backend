const express = require('express');
const router = express.Router();
const TriggerController = require('../controllers/trigger_controller');
// const Trigger = require('../model/Trigger');
const verifyToken = require('../middleware/verifyToken');

router.get('/getAllTrigger/:userId',verifyToken, TriggerController.getAllTrigger)
router.get('/getOneTrigger/:id',verifyToken,TriggerController.getOneTrigger)
router.get('/countAllTrigger/:userId',verifyToken,TriggerController.countAllTrigger)
router.post('/createTrigger', verifyToken,TriggerController.createTrigger);
router.patch('/updateTrigger/:id',verifyToken,TriggerController.updateTrigger)
router.delete('/deleteTrigger/:id',verifyToken,TriggerController.deleteTrigger)


module.exports = router;