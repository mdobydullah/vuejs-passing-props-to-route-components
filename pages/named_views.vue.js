const NamedViews = {
  template: `
    <div>
      <h3>Named Views</h3>
      <hr>
      <div class="row">
        <div class="col-md-2">
          <ol>
            <li><router-link :to="{ name: 'named_id', params: { bookID: 100 } }">Book 100</router-link></li>
            <li><router-link :to="{ name: 'named_id', params: { bookID: 101, bookData: { name: 'Test 1', author: 'Md Obydullah'} } }">Book 101</router-link></li>
          </ol>
        </div>
        <div class="col-md-5">
            <router-view name="book_details"></router-view>
        </div>
        <div class="col-md-5">
            <router-view name="sidebar"></router-view>
        </div>
      </div>
    </div>
    `, 
}