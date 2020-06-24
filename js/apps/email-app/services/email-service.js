import {utilService} from '../../../../js/services.js/util-service.js';

export const emailService = {
    getEmails,
    getById
}

const KEY = 'emails'

let gEmails = [
    {subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594, id:1},
    {subject: 'Why?', body: 'Pick up!', isRead: true, sentAt : 1421133930594, id:2},
    {subject: 'Hey?', body: 'Pick up!', isRead: false, sentAt : 1311133930594, id:3}
]


function getEmails () {
    if (utilService.loadFromStorage(KEY)) {
      gEmails = utilService.loadFromStorage(KEY);
    }
    return Promise.resolve(gEmails);
}


function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
  }
