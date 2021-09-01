const { users: service } = require("../../services");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { v4: uuidv4 } = require("uuid");

const usersDir = path.join(process.cwd(), "/public/avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tempName, originalname } = req.file;
  const [extension] = originalname.split(".").reverse();
  const newNameAvatar = uuidv4() + "." + extension;
  const fileName = path.join(usersDir, newNameAvatar);
  const { _id } = req.user;

  try {
    await Jimp.read(tempName)
      .then((originalname) => {
        return originalname.resize(250, 250).quality(60).write(fileName);
      })
      .catch((error) => {
        next(error);
      });

    const newAvatar = await service.update(_id, {
      avatarURL: "/public/avatars/" + newNameAvatar,
    });

    res.json({
      status: "success",
      code: 200,
      data: newAvatar,
    });
    await fs.unlink(tempName);
  } catch (error) {
    next(error);
  }
};

module.exports = updateAvatar;
