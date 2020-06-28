import emailStatus from "./email-status.cmp.js";

export default {
    props: ["emails"],
    template: `
        <section class="side-nav"> 
            <div class="flex flex-col">
                <h3 class="compose" @click="emitCompose">+Compose</h3>
                <h4 @click="changeListType('isInbox')">Inbox</h4>
                <h4 @click="changeListType('isStarred')">Starred</h4>
                <h4 @click="changeListType('isSent')">Sent</h4>
                <h4 @click="changeListType('isDraft')">Drafts</h4>
            </div>
        </section>
      `,
    methods: {
        emitCompose() {
            this.$emit('compose', true);
        },
        changeListType (type){
            this.$router.push({name:'email',params:{type}} );
        }
       
    },
    components: {
        emailStatus
    }
  };




