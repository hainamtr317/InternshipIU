const mongoose = require("mongoose");
const Message = require("./messageModel").schema;
const roomChatSchema = new mongoose.Schema(
  {
    UsersList: [{ type: mongoose.Types.ObjectId }],
    MessageList: [Message],
  },
  { timestamps: true }
);

module.exports = mongoose.model("roomChat", roomChatSchema);
