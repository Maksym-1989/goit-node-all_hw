const { Contact } = require("../models");

const listContacts = async (pagination, filter) => {
  const { page, limit } = pagination;
  const skip = page * limit - limit;
  const results = await Contact.find(filter, "id name email phone favorite", {
    skip,
    limit: Number(limit),
  });
  return results;
};

const getContactById = async (contactId, ownerId) => {
  const filter = { _id: contactId, owner: ownerId };
  const results = await Contact.find(filter);
  return results;
};

const removeContact = async (contactId, ownerId) => {
  const filter = { _id: contactId, owner: ownerId };
  const user = await Contact.findById(filter);

  if (!user || user.length < 1) return false;

  const result = await Contact.findByIdAndDelete({ _id: contactId });
  return result;
};

const addContact = async (body) => {
  const user = await Contact.find({ email: body.email });

  if (user) return false;

  const result = await Contact.create(body);
  return result;
};

const updateContact = async (contactId, body, ownerId) => {
  const filter = { _id: contactId, owner: ownerId };
  const user = await Contact.findById(filter);

  if (!user || user.length < 1) return false;

  const result = await Contact.findByIdAndUpdate(
    { _id: contactId },
    { ...body },
    { new: true }
  );
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
