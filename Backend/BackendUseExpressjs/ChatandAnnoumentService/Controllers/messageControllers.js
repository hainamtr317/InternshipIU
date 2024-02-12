const Message = require("../models/messageModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");

const AddUserIntoRoom = async (req, res) => {
  try {
    const { UserList, RoomName } = req.body;
    await Promise.all(
      UserList.map(async (e) => {
        const checkUser = await User.findById(e);
        if (e) {
          return { UserId: checkUser._id, UserName: checkUser.userId };
        } else {
          return false;
        }
      })
    ).then(async (value) => {
      if (value.includes(false)) {
        return res.status(400).json({
          success: false,
          msg: "not find user in Userlist",
        });
      } else {
        const valueCheckExit = await Room.find({ RoomName: RoomName });
        console.log(valueCheckExit);
        if (valueCheckExit.length > 0) {
          return res.status(400).json({
            success: false,
            msg: valueCheckExit,
          });
        }
        const CreateRoom = await Room.create({
          RoomName: RoomName,
          UsersList: value,
        });
        await Promise.all(
          UserList.map(async (e) => {
            const addChat = await User.findById(e);
            if (e) {
              await addChat.ChatRoom.push({
                ChatId: CreateRoom._id,
                RoomName: CreateRoom.RoomName,
              });
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
    return newMsg;
  } catch (error) {
    return error;
  }
};

module.exports = { AddUserIntoRoom, getMessage, sendMessage };
