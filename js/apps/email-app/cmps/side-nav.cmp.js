import {eventBus} from '../services/event-bus.service.js';

export default {
    props: ["emails"],
    template: `
        <section class="side-nav"> 
            <div class="flex flex-col">
            <button @click="emitCompose">+Compose</button>
                <h3 @click="emitListType('isInbox')">Inbox</h3>
                <h3 @click="emitListType('isStarred')">Starred</h3>
                <h3 @click="emitListType('isSent')">Sent Mail</h3>
                <h3 @click="emitListType('isDraft')">Drafts</h3>
            <!-- <email-status> -->
            </div>
        </section>
      `,
    methods: {
        emitCompose() {
            this.$emit('compose', true);
        },
        emitListType(listType) {
            this.$emit('type', listType);
        }
    },
    components: {
        eventBus,
    }
  };




