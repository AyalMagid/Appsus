export default {
  template: `
        <section class="email-filter">
            <!-- <h3>Search &#128269;</h3> -->
            <input class="search" type="text" placeholder="search..." v-model="filterBy.text" @input="emitFilter"/>
            <div class="flex select-container">
                <label for="is-read">Sort by: Read/Unread</label>
                <select class="read-select" name="is-red" id="is-red" v-model=filterBy.emailsToShow value="all" @change="emitFilter">
                    <option value="read">Read</option>
                    <option value="unread">Unread</option>
                    <option value="all">All</option>
                </select>
                <label for="sort-select">Date/Title</label>
                <select class="sort" name="sort-list" id="sort-list" v-model=sortBy @change="emitSort">
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </section>
    `,
  data() {
    return {
      filterBy: {
        text: "",
        emailsToShow: "all",
      },
      sortBy: "",
    };
  },
  methods: {
    emitSort() {
      this.$emit("sort", this.sortBy);
    },
    emitFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
