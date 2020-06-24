import emailList from '../cmps/email-list.cmp.js';
import { emailService } from "../services/email-service.js";

export default {
  template: `
        <main class="email-app">
            <h1>Email</h1>
            <email-list :emails="emailsToShow" ></email-list>
        </main>
    `,
  data() {
    return {
      emails: null,
    };
  },
  created() {
    emailService.getEmails().then((emails) => {
      this.emails = emails
    });
  },
  computed : {
    emailsToShow () {
        return this.emails
    }
  },
  components: {
    emailService,
    emailList
  },
};
