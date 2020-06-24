export default {
  template: `
        <section class="email-compose">
            <form>
                 <div class="flex flex-col details-container">
                    <h3>New Message</h3>
                    <h4>To: </h4>
                    <h4>Cc: </h4>
                    <h4>Bcc: </h4>
                    <h4>Subject: </h4>
                    <div class="email-body">
                        <textarea name="email-body" rows="4" cols="50" v-model="txt" ></textarea>
                        <button class="submit-btn" :disabled="!isValid" >Send</button>
                        <button>Delete</button>
                    </div>   
                 </div>
            </form>
        </section>
`,
  data() {
    return {
      txt: '',
    };
  },
  computed: {
    isValid() {
      return this.txt ? true : false;
    },
  },
};
