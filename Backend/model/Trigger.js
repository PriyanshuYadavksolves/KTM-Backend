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
    tag:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
},
{ timestamps: true }
)

module.exports = mongoose.model('Trigger',TriggerSchema)