export default {
    template: `
        <section class="email-filter">
            <!-- <h3>Search &#128269;</h3> -->
            <input class="search" type="text" placeholder="search..." v-model="filterBy.text" @input="emitFilter"/>
            <label for="is-read">Read/Unread</label>
            <select name="is-red" id="is-red" v-model=filterBy.emailsToShow value="all" @change="emitFilter">
                <option value="read">Read</option>
                <option value="unread">Unread</option>
                <option value="all">All</option>
            </select>
            <label for="sort-list">Sort By</label>
            <select name="sort-list" id="sort-list" v-model=sortBy @change="emitSort">
                <option value="date">Date</option>
                <option value="title">Title</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                emailsToShow: 'all'
            },
            sortBy : ''
        }
    },
    methods: {
        emitSort (){
            this.$emit('sort', this.sortby);
        },
        emitFilter() {
            this.$emit('filter', this.filterBy);
        }
    }
}