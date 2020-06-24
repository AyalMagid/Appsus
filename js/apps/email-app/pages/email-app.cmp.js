

export default {
    template: `
        <main class="email-app">
            <book-filter @filter="setFilter"></book-filter>
            <book-list :books="booksToShow" ></book-list>
            <book-add ></book-add>
        </main>
    `
}