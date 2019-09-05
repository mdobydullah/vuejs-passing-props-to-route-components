const BookList = {
  data() {
    return {
      selectedBook: {}
    }
  },
  template: `
    <div class="bookList">
        <h3>Book List</h3>
        <hr>
        <div class="row">
          <div class="col-md-2">
            <ol>
              <li> <a href="#" @click="loadbookData(100)">Book 100</a></li>
              <li> <a href="#" @click="loadbookData(101)">Book 101</a></li>
            </ol>
          </div>
          <div class="col-md-10">
            <div v-if="selectedBook.bookID">
              <Book :bookID="selectedBook.bookID" :bookData="selectedBook.bookData">
            </div>
          </div>
        </div>
    </div>
  `,
  methods: {
    loadbookData(id) {
      // you can call API via axios to get data from server
      this.selectedBook = id === 100
                ? { bookID: 100 }
                : { bookID: 101, bookData: {name: 'Test 1', author: 'Md Obydullah'}}
    }
  },
  /* 
    Book component is a child component and pass data via props.
  */
  components: {
    Book
  }
}