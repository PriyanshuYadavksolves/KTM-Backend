const mongoose = require('mongoose')


const TriggerSchema = mongoose.Schema({
    triggerName : {
        type : String,
        require : [true,"triggerName not provided"]
    },
    triggerType:{
        type:String,
        require:[true,'tagType not provided']
    },
    key:String,
    value:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

},
{ timestamps: true }
)

module.exports = mongoose.model('Trigger',TriggerSchema)