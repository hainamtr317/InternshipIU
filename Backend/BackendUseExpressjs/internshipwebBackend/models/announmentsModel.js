const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema(
  {
    whoSend: {
      type: String,
      required: true,
    },
    announcementContent: {
      type: String,
      required: true,
    },
    ReadStatus: {
      type: Boolean,
      required: true,
    },
    announcementLink: String,
  },
  { timestamps: true }
);

const addAnnounce = async (data) => {
  try {
    const annouce = await announcement(data);
    await annouce.save();
    return annouce;
  } catch (error) {
    return error;
  }
};
const annouceFindbyId = async (data) => {
  try {
    const annouce = await announcement.findById(data);
    await annouce.save();
    return annouce;
  } catch (error) {
    return error;
  }
};
announcement = mongoose.model("announcement", announcementSchema);
module.exports = announcement;
module.exports = { announcementSchema, addAnnounce, annouceFindbyId };
