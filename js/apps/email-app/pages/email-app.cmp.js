import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import sideNav from "../cmps/side-nav.cmp.js";
import userMsg from "../cmps/user-msg.cmp.js";
import emailStatus from "../cmps/email-status.cmp.js";
import emailHeader from "../cmps/email-header.cmp.js";

export default {
  template: `
        <main @click.stop="closeSideBar" class="email-app">
            <user-msg></user-msg>
            <email-header></email-header>
            <email-filter @sort="sortList" @filter="setFilter" ></email-filter>

                <div @click.stop="openSideBar" class="flex flex-col side-container" :class="{move: isMovedClass}">
                    <email-status ></email-status>
                    <side-nav @compose="changeComposeMode" />
                </div>
                <div class="list-container">
                    <email-list :emails="emailsToShow" :listType="listType"></email-list>
                </div>
  
            <email-compose  v-if="isComposeMode" @clsCompose="changeComposeMode" :isReply="false"/>
        </main>
    `,
  data() {
    return {
      emails: null,
      filterBy: null,
      isComposeMode: false,
      listType: null,
      isMoved: false
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
    openSideBar (){
        this.isMoved = true;
    },
    closeSideBar (){
        this.isMoved = false;
    }
  },
  computed: {
    emailsToShow() {
      let filteredEmails;
      if (!this.emails) return;
      filteredEmails = this.emails.filter((email) => email[this.listType]);
      let filterBy = this.filterBy;
      if (!filterBy) return filteredEmails;
      filteredEmails = filteredEmails.filter((email) => {
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
    isMovedClass (){
        return this.isMoved
    }
  },
  created() {
    console.log('create?')
    const { type } = this.$route.params;
    this.listType = type;
    emailService.getEmails().then((emails) => {
      this.emails = emails;
    });
  },
  watch: {
    "$route.params.type"() {
      const { type } = this.$route.params;
      this.listType = type;
    },
  },
  components: {
    emailService,
    emailList,
    emailFilter,
    emailCompose,
    sideNav,
    emailStatus,
    userMsg,
    emailHeader
  },
};
