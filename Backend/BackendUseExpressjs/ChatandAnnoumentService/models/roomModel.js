const mongoose = require("mongoose");
const Message = require("./messageModel").schema;
const roomChatSchema = new mongoose.Schema(
  {
    RoomName: { type: String, require: true },
    UsersList: [{ UserId: { ype: mongoose.Types.ObjectId }, UserName: String }],
    MessageList: [Message],
  },
  { timestamps: true }
);

module.exports = mongoose.model("roomChat", roomChatSchema);
