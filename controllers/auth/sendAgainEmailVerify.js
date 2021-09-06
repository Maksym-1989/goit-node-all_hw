const { users: service } = require("../../services");
const { sendgridEmail } = require("../../utils");
require("dotenv").config();

const sendAgainEmailVerify = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await service.getOne({ email });

    if (!user) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Wrong email",
      });
    }
    
    if (user.verify) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: "Already verify",
      });
    }

    const { verifyToken } = user;
    const { URL } = process.env;

    const userSendEmail = {
      to: email,
      subject: "Verify email",
      html: `<a href="${URL}/api/v1/auth/verify/${verifyToken}" target="_blank">Verify email</a>`,
    };

    await sendgridEmail(userSendEmail);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = sendAgainEmailVerify;
