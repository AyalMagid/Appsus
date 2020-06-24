

export default {
    props: ["emails"],
    template: `
        <section class="side-nav"> 
            <div class="side-nav flex flex-col">
            <button>+Compose</button>
            <h3>Inbox</h3>
            <h3>Starred</h3>
            <h3>Sent Mail</h3>
            <h3>Drafts</h3>
            <!-- <email-status> -->
            </div>
        </section>
      `,
    components: {

    },
  };


