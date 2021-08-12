const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const getContactById = async (contactId) => {
  const contacts = await fs.readFile(contactsPath, "utf-8");

  const parsedContacts = JSON.parse(contacts);

  const result = parsedContacts.find(
    (contact) => String(contact.id) === String(contactId)
  );

  return result;
};

module.exports = getContactById;
