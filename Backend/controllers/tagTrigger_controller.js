const Tag = require('../model/Tag')
const Trigger = require('../model/Trigger')

exports.createTag = async (req, res) => {
   
    const { tagName, tagType, triggerName, triggerType, key, value,userId } = req.body.data;
    try {
        // Create the trigger
        const trigger = await Trigger.create({ triggerName, triggerType, key, value,userId});
        // console.log(trigger);


        // Create the tag
        const tag = await Tag.create({ tagName, tagType,trigger:{triggerId : trigger._id.toString(),triggerName},userId });
        // console.log("tag ====== " + tag);


        // Send a single response after both tag and trigger creation
        res.status(200).json({ tag, trigger });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json(error);
    }
}

//Put a trigger in tag
exports.addtrigger = async(req,res)=>{
    console.log("hello")
    const {id} = req.params
    const { updateTrig } = req.body;
    // console.log(updateTrig)

    try {
        const updateTag = await Tag.findByIdAndUpdate(id, {
            $addToSet: { trigger: { $each: updateTrig } }
        }, { new: true });        
        res.status(200).json(updateTag)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.countAllTag = async(req,res)=>{
    const {userId} = req.params 
    try {
        const count = await Tag.countDocuments({userId})
        res.status(200).json(count)
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAllTag = async(req,res)=>{
    const {userId} = req.params
    try {
        const allTags = await Tag.find({userId})
        res.status(200).json(allTags)
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.getOneTag = async(req,res)=>{
    const {id} = req.params
    try {
        const tag = await Tag.findById(id)
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json(error)
    }
}



exports.deleteTag = async(req,res)=>{
    const {id} = req.params
    try {
        await Tag.findByIdAndDelete(id)
        res.status(200).json({message:"Tag Deleted"})
    } catch (error) {
        res.status(500).json(error)
    }
}
