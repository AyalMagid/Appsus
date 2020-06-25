import { emailService } from "../services/email-service.js";
import { eventBus } from "../services/event-bus.service.js";
import emailList from "../cmps/email-list.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import sideNav from "../cmps/side-nav.cmp.js";
import emailStatus from "../cmps/email-status.cmp.js";

export default {
  template: `
        <main class="email-app" >
        <header class="app-header flex align-center space-between">
                <h1>Appsus</h1>
                <email-filter @sort="sortList" @filter="setFilter" ></email-filter>
                <nav>
                    <router-link to="/">Home</router-link> |
                    <router-link to="/email">MisterEmail</router-link> | 
                    <router-link to="/note">Miss Notes</router-link> | 
                    <!-- <router-link to="/book">Miss Books</router-link> |  -->
                    <router-link to="/about">About</router-link> | 
                </nav>
            </header>
            <email-status :emails="emails"></email-status>
            <div class="main-container flex space-between">
                <side-nav @compose="changeComposeMode" @type="changeListType"/>
                <div class="list-container">
                    <email-list :emails="emailsToShow"  ></email-list>
                </div>
            </div>
            <email-compose  v-if="isComposeMode" @clsCompose="changeComposeMode" :isReply="false"/>
        </main>
    `,
  data() {
    return {
      emails: null,
      filterBy: null,
      isComposeMode: false,
      listType: "isInbox",
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
      console.log(this.filterBy);
    },
    sortList(val) {
      if (val === "title") {
        emailService.sortByTitle();
      } else if (val === "date") {
        emailService.sortByDate();
      }
    },
    changeComposeMode(val) {
      this.isComposeMode = val;
    },
    changeListType(type) {
      emailService.getEmails().then((emails) => {
        this.emails = emails;
      });
      this.listType = type;
    },
  },
  computed: {
    emailsToShow() {
      if (this.emails) {
        this.emails = this.emails.filter((email) => email[this.listType]);
      }
      let filterBy = this.filterBy;
      if (!filterBy) return this.emails;
      let filteredEmails = this.emails.filter((email) => {
        return email.subject
          .toLowerCase()
          .includes(filterBy.text.toLowerCase());
      });
      if (this.filterBy.emailsToShow === "read") {
        filteredEmails = filteredEmails.filter((email) => email.isRead);
      } else if (this.filterBy.emailsToShow === "unread") {
        filteredEmails = filteredEmails.filter((email) => !email.isRead);
      }
      return filteredEmails;
    },
  },
  created() {
    emailService.getEmails().then((emails) => {
      this.emails = emails;
    });
  },
  components: {
    emailService,
    eventBus,
    emailList,
    emailFilter,
    emailCompose,
    sideNav,
    emailStatus,
  },
};

