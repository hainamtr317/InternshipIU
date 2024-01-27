const mongoose = require("mongoose");

const CvSchema = mongoose.Schema(
  {
    LinkCv: {
      type: String,
      required: true,
    },
    MainCv: {
      type: Boolean,
      required: true,
    },
    NameCV: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cv", CvSchema);
module.exports = { CvSchema };
