import {utilService} from '../../../../js/services.js/util-service.js';

export const emailService = {
    getEmails,
    getById,
    sortByTitle,
    sortByDate,
    createEmail,
    addEmail
}

const KEY = 'emails'

let gEmails = [
    {address : '<ayal123@gEmails.com>', name: 'Moshe', subject: 'Wassap?', body: 'Pick up! haver sheli mahhhherrrrrrrrrr', isRead: false, sentAt : 1551133930594, id:utilService.makeId()},
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

function sortByTitle() {
    gEmails.sort((a, b) => {
        if (a.subject > b.subject) {
            return 1
        } else {
            return -1
        }
    })
}

// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.
function sortByDate(){
    gEmails.sort((a,b) =>{
        return new Date(b.sentAt) - new Date(a.sentAt);
    })
}

function createEmail(txt) {
    return {
        address: '<ayal123@gEmails.com>',
        name: 'Ayal',
        body: txt,
        isRead: false,
        sentAt: Date.now(),
        id:utilService.makeId()
    }
}

function addEmail(email) {
    console.log(email)
    gEmails.unshift(email)
    utilService.saveToStorage(KEY, gEmails)
}