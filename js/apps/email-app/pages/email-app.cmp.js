import emailList from "../cmps/email-list.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import sideNav from "../cmps/side-nav.cmp.js";
import { emailService } from "../services/email-service.js";

export default {
  template: `
        <main class="email-app" >
            <h1>Email</h1>
            <email-filter @sort="sortList" @filter="setFilter" ></email-filter>
            <h3>unread emails: {{unredCount}}</h3>
            <div class="main-container flex space-between">
                <side-nav @compose="changeComposeMode" />
                <div class="list-container">
                    <email-list :emails="emailsToShow" ></email-list>
                </div>
            </div>
            <email-compose  v-if="isComposeMode" @clsCompose="changeComposeMode"/>
        </main>
    `,
  data() {
    return {
      emails: null,
      filterBy: null,
    //   sort:''
    isComposeMode : false
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
      console.log(this.filterBy )
    },
    // why not gettting a value?
    sortList(val) {
        console.log('val', val)
        // if (val='date') {}
        // else {}
    },
    changeComposeMode (val){
        this.isComposeMode = val;
    },

  },
  computed: {
    emailsToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.emails;
      let filteredEmails = this.emails.filter((email) => {
        return email.subject.toLowerCase().includes(filterBy.text.toLowerCase());
      });
      if (this.filterBy.emailsToShow === 'read') {
      filteredEmails = filteredEmails.filter(email => email.isRead)}
      else if (this.filterBy.emailsToShow === 'unread'){filteredEmails = filteredEmails.filter(email => !email.isRead)}
      return filteredEmails;
    },
    unredCount(){
        if (!this.emails) return
        return this.emails.filter(email => !email.isRead).length
    },

  },
  created() {
    emailService.getEmails().then((emails) => {
      this.emails = emails;
      console.log(this.emails);
    });
  },
  components: {
    emailService,
    emailList,
    emailFilter,
    emailCompose,
    sideNav,
  },
};
