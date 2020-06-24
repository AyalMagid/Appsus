import { emailService } from "../services/email-service.js";

export default {
  template: `
        <main class="email-app">
            <h1>Email</h1>
        </main>
    `,
  data() {
    return {
      emails: null,
    };
  },
  created() {
    emailService.getEmails().then((emails) => {
      this.emails = emails;
      console.log(emails);
    });
  },
  components: {
    emailService,
  },
};
