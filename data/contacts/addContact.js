const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");
const addContact = async (body) => {
  const id = uuidv4();
  const newContact = { id, ...body };

  const contacts = await fs.readFile(contactsPath, "utf-8");

  const parsedContacts = JSON.parse(contacts);

  const updatedContacts = [...parsedContacts, newContact];

  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
  return newContact;
};

module.exports = addContact;
