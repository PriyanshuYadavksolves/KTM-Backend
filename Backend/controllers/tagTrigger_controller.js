const Tag = require('../model/Tag')
const Trigger = require('../model/Trigger')

exports.createTag = async (req, res) => {
    const { tagName, tagType, triggerName, triggerType, key, value } = req.body;
    try {
        // Create the tag
        const tag = await Tag.create({ tagName, tagType });
        // console.log("tag ====== " + tag);

        // Create the trigger
        const trigger = await Trigger.create({ triggerName, triggerType, key, value, tag: tag._id.toString() });
        // console.log(trigger);

        // Send a single response after both tag and trigger creation
        res.status(200).json({ tag, trigger });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json(error);
    }
}

exports.countAllTag = async(req,res)=>{
    try {
        const count = await Tag.countDocuments({})
        res.status(200).json(count)
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getAllTag = async(req,res)=>{
    try {
        const allTags = await Tag.find({})
        res.status(200).json(allTags)
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
