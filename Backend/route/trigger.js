const express = require('express');
const router = express.Router();
const TriggerController = require('../controllers/trigger_controller');
const Trigger = require('../model/Trigger');

router.get('/getAllTrigger',TriggerController.getAllTrigger)
router.get('/getOneTrigger/:id',TriggerController.getOneTrigger)
router.get('/countAllTrigger',TriggerController.countAllTrigger)
router.post('/createTrigger', TriggerController.createTrigger);
router.patch('/updateTrigger/:id',TriggerController.updateTrigger)
router.patch('/addTag/:id',TriggerController.addTag)
router.delete('/deleteTrigger/:id',TriggerController.deleteTrigger)


module.exports = router;