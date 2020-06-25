import {eventBus} from '../services/event-bus.service.js';

export default {
    props: ["emails"],
    template: `
        <section class="side-nav"> 
            <div class="flex flex-col">
            <button @click="emitCompose">+Compose</button>
            <h3>Inbox</h3>
            <h3>Starred</h3>
            <h3>Sent Mail</h3>
            <h3>Drafts</h3>
            <!-- <email-status> -->
            </div>
        </section>
      `,
    methods: {
        emitCompose() {
            this.$emit('compose', true);
        },
    }
  };

  


