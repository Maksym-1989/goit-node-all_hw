const { users: service } = require("../../services");
const gravatar = require("gravatar");
const { sendgridEmail } = require("../../utils");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.getOne({ email });
    if (user) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Already register",
      });
    }
    req.body.avatarURL = gravatar.url(email);
    const verifyToken = uuidv4();
    const { email: userEmail } = await service.add({ ...req.body, verifyToken });
    
    const { URL } = process.env;

    const userSendEmail = {
      to: userEmail,
      subject: "Verify email",
      html: `<a href="${URL}/api/v1/auth/verify/${verifyToken}" target="_blank">Verify email</a>`,
    };
   
    await sendgridEmail(userSendEmail);

    res.status(201).json({
      status: "success",
      code: 201,
      message: "Success register. Verify your mail",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
