import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    return contacts.length;
  } catch (err) {
    console.log(err, 'Cannot count contacts');
  }
};

console.log(await countContacts());
