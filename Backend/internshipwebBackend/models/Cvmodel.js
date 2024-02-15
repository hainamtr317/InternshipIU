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
const CvFindOne = async (data) => {
  try {
    const StudentCvData = await StudentCV.findOne(data);
    return StudentCvData;
  } catch (error) {
    return error;
  }
};
const StudentCV = mongoose.model("Cv", CvSchema);

module.exports = { StudentCV, CvSchema, CvFindOne };
