import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-status">
          <h4 class="txt">Unread Emails  </h4>
          <div class="numbers-status">
          {{unredCount}} | {{unredByPrec}}
          </div>
        </section>
    `,
    data() {
        return {
            emails : null,
            inbox: null
        }
    },
    computed: {

        unredCount(){
            if (!this.emails) return
            this.inbox = this.emails.filter(email => (email.isInbox))
            let unReadEmailsCount = this.inbox.filter(email => (!email.isRead)).length
            if (unReadEmailsCount) {return unReadEmailsCount}
            else return 0
        },
        unredByPrec(){
            if (!this.emails) return
            return Math.floor((this.unredCount/this.inbox.length)*100)+'%'
        }
    },
    created () {
        emailService.getEmails().then((emails) => {
            this.emails = emails;
           
          });
    },
    components: {
        emailService
      }
}
