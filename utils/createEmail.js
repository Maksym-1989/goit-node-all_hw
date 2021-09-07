const sendgridEmail = require("./sendgridEmail");

const createEmail = (emailList) => {
  const requests = emailList.map((item) => sendgridEmail(item));
  Promise.allSettled(requests);
};

module.exports = createEmail;
