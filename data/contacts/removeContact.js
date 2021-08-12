const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const removeContact = async (contactId) => {
  const contacts = await fs.readFile(contactsPath, "utf-8");

  const parsedContacts = JSON.parse(contacts);
  const index = parsedContacts.findIndex(
    (item) => String(item.id) === String(contactId)
  );

  if (index !== -1) {
    const result = parsedContacts.splice(index, 1);
    const filteredContacts = parsedContacts.filter(
      (contact) => String(contact.id) !== String(contactId)
    );

    await fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));
    return result;
  }
};

module.exports = removeContact;
