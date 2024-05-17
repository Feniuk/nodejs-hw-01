import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

    const updatedContacts = [];
    for (let i = 0; i < number; i += 1) {
      const newContact = createFakeContact();
      updatedContacts.push(newContact);
    }

    contacts.push(...updatedContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (err) {
    console.log(err, 'Problem by generating contacts');
  }
};

await generateContacts(5);
