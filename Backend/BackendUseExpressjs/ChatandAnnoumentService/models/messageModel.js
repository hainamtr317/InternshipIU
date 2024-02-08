const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    mgs: { type: String, require: true },
    sender: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("message", MessageSchema);
module.exports = Message;
