import {utilService} from '../../../../js/services.js/util-service.js';

export const emailService = {
    getEmails,
    getById
}

const KEY = 'emails'

let gEmails = [
    {address : '<ayal123@gEmails.com>', name: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594, id:utilService.makeId()},
    {address : '<ayal123@gEmails.com>', name: 'Lior', subject: 'Why?', body: 'Pick up!', isRead: true, sentAt : 1421133930594, id:utilService.makeId()},
    {address : '<ayal123@gEmails.com>', name: 'Gil', subject: 'Hey?', body: 'Pick up!', isRead: false, sentAt : 1311133930594, id:utilService.makeId()}
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

