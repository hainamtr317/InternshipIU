const Message = require("../models/messageModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");

const AddUserIntoRoom = async (req, res) => {
  try {
    const { UserList, RoomName } = req.body;
    await Promise.all(
      UserList.map(async (e) => {
        const checkUser = await User.findById(e);
        if (checkUser) {
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
const DeleteUserIntoRoom = async (req, res) => {
  try {
    const { UserList, RoomName } = req.body;
    const RoomID = await Room.findOne({ RoomName: RoomName });
    console.log(RoomID.RoomName);
    await Promise.all(
      UserList.map(async (e) => {
        const getUserData = await User.findById(e);
        if (getUserData) {
          if (getUserData.ChatRoom.length > 0) {
            let index = await getUserData.ChatRoom.findIndex(
              (x) => x.RoomName === RoomID.RoomName
            );
            await getUserData.ChatRoom.splice(index, 1);
            await getUserData.save();
          }
          return true;
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
        if (RoomID.MessageList.length > 0) {
          await Promise.all(
            RoomID.MessageList.map(async (mes) => {
              await Message.findByIdAndDelete(mes._id.toString());
            })
          ).then(async () => {
            await Room.findByIdAndDelete(RoomID._id.toString());
            return res.status(200).json({
              success: true,
              msg: "Delete success",
            });
          });
        } else {
          await Room.findByIdAndDelete(RoomID._id.toString());
          return res.status(200).json({
            success: true,
            msg: "Delete success",
          });
        }
      }
    });
  } catch (error) {
    console.log("have err");
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

module.exports = {
  AddUserIntoRoom,
  getMessage,
  sendMessage,
  DeleteUserIntoRoom,
};
