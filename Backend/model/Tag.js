const mongoose = require('mongoose')

const TagSchema = mongoose.Schema({
    tagName : {
        type : String,
        require : [true,"tagName not provided"]
    },
    tagType:{
        type:String,
        require:[true,'tagType not provided']
    }
},
{ timestamps: true }
)

module.exports = mongoose.model('Tag',TagSchema)