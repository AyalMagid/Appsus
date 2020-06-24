import { emailService } from "../services/email-service.js";


export default {
    template: `
        <section v-if="email" class="email-details">
            <router-link to="/email"><button class="close-email-btn">Back to Email list</button></router-link>
            <div class="flex flex-col details-container">
                <h3>New Message</h3>
                <h4>To: </h4>
                <h4>Cc: </h4>
                <h4>Bcc: </h4>
                <h4>Subject: </h4>
                <div class="mail-body">
                    <button>Send</button>
                    <button>Delete</button>
                </div>   
            </div>
        </section>
        `,
        data () {
            return {
                email: null
            }
        },
        created () {
                const {emailId} = this.$route.params;
                console.log(emailId)
                emailService.getById(emailId)
                    .then(email => 
                        console.log(email)
                        // this.email = email;
                    )
        },
        components: {
            emailService
        }
}