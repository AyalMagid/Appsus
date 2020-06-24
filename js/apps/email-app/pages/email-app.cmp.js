import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { emailService } from "../services/email-service.js";

export default {
  template: `
        <main class="email-app">
            <h1>Email</h1>
            <email-filter @filter="setFilter"></email-filter>
            <email-list :emails="emailsToShow" ></email-list>
        </main>
    `,
  data() {
    return {
      emails: null,
      filterBy:''
      
    };
  },
  methods: {
    setFilter(filterBy) {
        this.filterBy = filterBy;
    }
},
  computed : {
    emailsToShow () {
        // const filterBy = this.filterBy;
        // if (!filterBy) return this.emails;
        // let filteredEmails = this.emails.filter(email => {
        //     return email.subject.toLowerCase().includes(filterBy.toLowerCase());
        // });
        return this.emails
    }
  },
  created() {
    emailService.getEmails().then((emails) => {
      this.emails = emails
      console.log(this.emails)
    });
  },
  components: {
    emailService,
    emailList,
    emailFilter
  },
};
