const Message = require("../models/messageModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");

const AddUserIntoRoom = async (req, res) => {
  try {
    const { UserList } = req.body;
    await Promise.all(
      UserList.map(async (e) => {
        const checkUser = await User.findById(e);
        if (e) {
          return checkUser._id;
        } else {
          return false;
        }
      })
    ).then(async (value) => {
      if (value.includes(false)) {
        res.status(400).json({
          success: false,
          msg: "not find user in Userlist",
        });
      } else {
        const CreateRoom = await Room.create({ UsersList: value });
        await Promise.all(
          UserList.map(async (e) => {
            const addChat = await User.findById(e);
            if (e) {
              await addChat.ChatRoom.push(CreateRoom._id);
              await addChat.save();
              return addChat._id;
            } else {
              return false;
            }
          })
        ).then(() => {
          return res.status(200).json({ success: true, msg: CreateRoom._id });
        });
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.toString(),
    });
  }
};

const getMessage = async (room) => {
  try {
    const MgsRoom = await Room.findById(room);
    return MgsRoom.MessageList.slice(-100);
  } catch (error) {
    return error;
  }
};
const sendMessage = async (room, sender, mgs) => {
  try {
    const newMsg = await Message.create({ mgs: mgs, sender: sender });
    const MgsRoom = await Room.findById(room);
    await MgsRoom.MessageList.push(newMsg);
    await MgsRoom.save();
    return MgsRoom.MessageList.slice(-100);
  } catch (error) {
    return error;
  }
};

module.exports = { AddUserIntoRoom, getMessage, sendMessage };
