const Trigger = require('../model/Trigger')

//Create Trigger
exports.createTrigger = async(req,res)=>{
    const {triggerName, triggerType, key, value } = req.body;
    try {
        const trigger = await Trigger.create({
            triggerName,triggerType,key,value
        })
        res.status(200).json(trigger)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Put tag id in trigger
exports.addTag = async(req,res)=>{
    const {id} = req.params
    const {tagId} = req.body
    try {
        const updateTrigger = await Trigger.findByIdAndUpdate(id,{$addToSet:{tag:tagId}},{new:true})
        res.status(200).json(updateTrigger)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update trigger
exports.updateTrigger = async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try {
        const updateTrigger = await Trigger.findByIdAndUpdate(id,{$set:req.body},{new:true})
        console.log(updateTrigger)
        res.status(200).json(updateTrigger)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get All Trigger
exports.getAllTrigger = async(req,res)=>{
    try {
        const allTriggers = await Trigger.find({})
        res.status(200).json(allTriggers)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get Count Of All Trigger
exports.countAllTrigger = async(req,res)=>{
    try {
        const count = await Trigger.countDocuments({})
        res.status(200).json(count)
    } catch (error) {
        res.status(500).json(error);
    }
}

//Get one Trigger
exports.getOneTrigger = async(req,res)=>{
    const {id} = req.params
    try {
        const oneTrigger = await Trigger.findById(id)
        res.status(200).json(oneTrigger)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete Trigger
exports.deleteTrigger = async(req,res)=>{
    const {id} = req.params
    try {
        await Trigger.findByIdAndDelete(id)
        res.status(200).json({message:"deleted"})
    } catch (error) {
        res.status(500).json(error)
    }
}