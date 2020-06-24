import emailPreview from "./email-preview.cmp.js";

export default {
  props: ["emails"],
  template: `
  <section> 
        <ul  class="email-list clean-list flex flex-col">
            <email-preview v-for="email in emails"  :email="email" :key="email.id"/>
       </ul>
</section>
    `,
  components: {
    emailPreview
  },
};
