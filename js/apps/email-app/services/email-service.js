import { utilService } from "../../../../js/services.js/util-service.js";

export const emailService = {
  getEmails,
  getById,
  sortByTitle,
  sortByDate,
  createEmail,
  addEmail,
  removeEmail,
  addToOtherType,
};

const KEY = "emails";

let gEmails = [
  {
    address: "<ayal123@gEmails.com>",
    name: "Moshe",
    subject: "Wassap?",
    body: "Hello dear friend............",
    isRead: false,
    sentAt: 1551133930594,
    id: utilService.makeId(),
    isInbox: true,
    isStarred: false,
    isSent: false,
    isDraft: false,
  },
  {
    address: "<ayal123@gEmails.com>",
    name: "Lior",
    subject: "Why?",
    body: "why not???????????????",
    isRead: true,
    sentAt: 1421133930594,
    id: utilService.makeId(),
    isInbox: true,
    isStarred: false,
    isSent: false,
    isDraft: false,
  },
  {
    address: "<ayal123@gEmails.com>",
    name: "Gil",
    subject: "Hey?",
    body: "Pick up! fasssssssssttttttttttttt",
    isRead: false,
    sentAt: 1311133930594,
    id: utilService.makeId(),
    isInbox: true,
    isStarred: false,
    isSent: false,
    isDraft: false,
  },
];

function getEmails() {
  // if (utilService.loadFromStorage(KEY)) {
    // gEmails = utilService.loadFromStorage(KEY);
  // }
  return Promise.resolve(gEmails);
}

function getById(emailId) {
  const email = gEmails.find((email) => email.id === emailId);
  console.log(email);
  return Promise.resolve(email);
}

function sortByTitle() {
  gEmails.sort((a, b) => {
    if (a.subject > b.subject) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.
function sortByDate() {
  gEmails.sort((a, b) => {
    return new Date(b.sentAt) - new Date(a.sentAt);
  });
}


function createEmail(txt, subject, draftVal, sentVal, inboxVal) {
    console.log(draftVal)
  return {
    address: "<ayal123@gEmails.com>",
    name: "Ayal",
    subject,
    body: txt,
    isRead: false,
    sentAt: Date.now(),
    id: utilService.makeId(),
    isInbox: inboxVal,
    isStarred: false,
    isSent: sentVal,
    isDraft: draftVal,
  };
}

function addEmail(email) {
  gEmails.unshift(email);
  utilService.saveToStorage(KEY, gEmails);
}


function addToOtherType(listType) {
  gEmails[listType] = true;
  utilService.saveToStorage(KEY, gEmails);
}

function removeEmail(emailId, listType) {
  const idx = gEmails.findIndex(function (email) {
    return email.id === emailId;
  });
  const email = gEmails.find((email) => email.id === emailId);
  if (email[listType]) {
    email[listType] = false;
  }
  if (!email.isInbox && !email.isStarred && !email.isSent && !email.isDraft) {
    gEmails.splice(idx, 1);
  }
  utilService.saveToStorage(KEY, gEmails);
}
