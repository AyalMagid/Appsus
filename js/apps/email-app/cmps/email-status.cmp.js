

export default {
    props: ['emails'],
    template: `
        <section class="email-status">
          <h3>unread emails: {{unredCount}}</h3>
          <div class="prec-status">
              {{unredByPrec}}
          </div>
        </section>
    `,
    data() {
        return {

        }
    },
    computed: {

        unredCount(){
            if (!this.emails) return
            return this.emails.filter(email => !email.isRead).length
        },
        unredByPrec(){
            if (!this.emails) return
            return Math.floor((this.unredCount/this.emails.length)*100)+'%'
        }
    }

}



