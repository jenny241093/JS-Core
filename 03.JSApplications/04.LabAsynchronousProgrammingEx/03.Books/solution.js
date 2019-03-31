function attachEvents() {
  let baseUrl = `https://baas.kinvey.com/appdata/kid_rJP-cWMdE/`;
  $(`.load`).on("click", loadAllBooks);
  $(`.add`).on("click", createBook);

  const kinveyUsername = "guest";
  const kinveyPassword = "guest";
  const base64auth = btoa(`${kinveyUsername}:${kinveyPassword}`);
  const authHeaders = {
    Authorization: "Basic " + base64auth
  };
  async function loadAllBooks() {
    $(`#books`).empty();
    try {
      let books = await $.ajax({
        type: "GET",
        url: baseUrl + "books",
        contentType: 'application/json',
        headers: authHeaders
      });
      console.log(books);
      for (const book of books) {
        const $appendBook = $(`
                  <div class="book" data-id="${book._id}">
                      <label>Author</label>
                      <input type="text" class="author" value="${book.author}"/>
                      <label>Title</label>
                      <input type="text" class="title" value="${book.title}"/>
                      <label>ISBN</label>
                      <input type="text" class="isbn" value="${book.isbn}"/>
                      <button class="update">Update</button>
                      <button class="delete">Delete</button>
                  </div>
                  `);
        $("#books").append($appendBook);
        $(".delete").on("click", deleteBook);
        $(".update").on("click", updateBook);

      }
    } catch (error) {
      console.log(error);
    }
  }
  async function createBook() {
    try {
      let author = $(".author").val();
      console.log(author);

      let title = $(".title").val();
      console.log(title);

      let isbn = $(".isbn").val();
      console.log(isbn);

      let data = {
        title,
        author,
        isbn
      };
      console.log(data);

      await $.ajax({
        type: "POST",
        url: baseUrl + "books",
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: authHeaders
      });
      $(".author").val(``);
      $(".title").val(``);
      $(".isbn").val(``);
      loadAllBooks();
    } catch (error) {
      console.log(error);
    }
  }
  async function updateBook() {
    let catchId = $(this)
      .parent()
      .data("id");
    console.log(catchId);

    let author = $(this)
      .parent()
      .find("input.author")
      .val();
    console.log(author);

    let title = $(this)
      .parent()
      .find("input.title")
      .val();
    console.log(title);
    let isbn = $(this)
      .parent()
      .find("input.isbn")
      .val();
    console.log(isbn);
    let data = {
      title,
      author,
      isbn
    };

    await $.ajax({
      type: "PUT",
      url: baseUrl + "books/" + catchId,
      data: JSON.stringify(data),
      headers: authHeaders
    });

    loadAllBooks();
  }
  async function deleteBook() {
    let catchId = $(this)
      .parent()
      .data("id");
    console.log(catchId);
    await $.ajax({
      type: "DELETE",
      url: baseUrl + "books/" + catchId,
      headers: authHeaders
    });
    loadAllBooks();
  }
}