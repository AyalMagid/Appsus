export default {
    template: `
        <section class="email-filter">
            <!-- <h3>Search &#128269;</h3> -->
            <input class="search" type="text" placeholder="search..." v-model="filterBy" @input="emitFilter"/>
        </section>
    `,
    data() {
        return {
            filterBy: ''
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filter', this.filterBy);
        }
    }
}