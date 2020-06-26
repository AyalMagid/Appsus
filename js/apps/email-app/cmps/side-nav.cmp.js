import emailStatus from "./email-status.cmp.js";

export default {
    props: ["emails"],
    template: `
        <section class="side-nav"> 
            <div class="flex flex-col">
                <h3 class="compose" @click="emitCompose">+Compose</h3>
                <h3 @click="changeListType('isInbox')">Inbox</h3>
                <h3 @click="changeListType('isStarred')">Starred</h3>
                <h3 @click="changeListType('isSent')">Sent Mail</h3>
                <h3 @click="changeListType('isDraft')">Drafts</h3>
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




