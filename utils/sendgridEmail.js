const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendgridEmail = async ({ to, subject, html }) => {
  const email = {
    from: "zaksumy1989@gmail.com",
    to:to,
    subject:subject,
    html:html,
  };

  
  const result = await sgMail.send(email);
  return result;
};

module.exports = sendgridEmail;
