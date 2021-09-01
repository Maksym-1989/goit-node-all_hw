const path = require("path");
const multer = require("multer");

const tempDir = path.join(process.cwd(), "tmp");

const storageSettings = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 10000,
  },
});

const uploadMiddleware = multer({
  storage: storageSettings,
});

module.exports = uploadMiddleware;
