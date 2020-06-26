import emailPreview from "./email-preview.cmp.js";
import {eventBus} from '../services/event-bus.service.js';

export default {
  props: ['emails', 'listType'],
  template: `
  <section class="email-list clean-list flex flex-col"> 
        <ul   >
            <email-preview v-for="email in emails" :listType="listType"  :email="email" :key="email.id"/>
       </ul>
</section>
    `,

  components: {
    emailPreview
  },
};
