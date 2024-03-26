const mongoose = require("mongoose");

const TagSchema = mongoose.Schema(
  {
    tagName: {
      type: String,
      require: [true, "tagName not provided"],
    },
    tagType: {
      type: String,
      require: [true, "tagType not provided"],
    },
    trigger: [
      {
        triggerId: { type: mongoose.Schema.Types.ObjectId, ref: "triggers" },
        triggerName:String ,
      },
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tag", TagSchema);
