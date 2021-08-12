const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContact = async (contactId, body) => {
  const contacts = await fs.readFile(contactsPath, "utf-8");

  const parsedContacts = JSON.parse(contacts);

  const idx = parsedContacts.findIndex(
    (contact) => String(contact.id) === String(contactId)
  );

  if (idx !== -1) {
    const updateContact = { ...body, id: contactId };
    parsedContacts[idx] = updateContact;
    const result = JSON.stringify(parsedContacts, null, 2);
    await fs.writeFile(contactsPath, result);
    return parsedContacts[idx];
  }
};

module.exports = updateContact;
