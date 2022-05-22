// bazni url za api
const BASE_URL = "https://ptf-web-dizajn-2022.azurewebsites.net/";  

// fetch koji renderuje knjige 
fetch(`${BASE_URL}/books`)
    .then(response => {
        return response.json();
    })
    .then(books => {
        renderBooks(books);
    })

// fetch koji renderuje autore
fetch(`${BASE_URL}/authors`)
    .then(response => {
        return response.json();
    })
    .then(authors => {
        renderAuthors(authors);
    })

// GET endpoint za dohvatanje podataka o piscima koji se nalaze u bazi
const renderAuthors = (authors) => {

    console.log(authors);
    const authorRow = document.getElementById('author-row');

    let resultAuthorHtml = '';

    authors.forEach(authors => {
        resultAuthorHtml += `
        <div class="card col-4 mx-2 my-2" style="width: 90%">
            <div class="card-body">
                <h5 class="card-title">${authors.name}</h5>
                <h6>${authors.id}</h6>
            </div>
        </div>
        `;
    });

    authorRow.innerHTML = resultAuthorHtml;
}

// GET endpoint za dohvatanje podataka o knjigama koje se nalaze u bazi
const renderBooks = (books) => {

    console.log(books);
    const booksRow = document.getElementById('books-row');

    let resultHtml = '';

    books.forEach(books => {
        resultHtml += `
        <div class="card col-4 mx-2 my-2" style="width: 15rem;">
            <p></p>
            <img src=${books.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
                <h5 class="card-title">${books.name}</h5>
                <h6>${books.author.name}</h6>
                <p>${books.genre}</p>
            </div>
            <p class="sticky-bottom">
                <button type="button" class="btn btn-warning" onclick="putBookForm('${books.id}','${books.name}','${books.genre}','${books.image}','${books.author.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Edit book</button>
                <button type="button" class="btn btn-danger" onclick="deleteBook('${books.id}')">Delete</button>
            </p>
        </div>
        `;
    });

    booksRow.innerHTML = resultHtml;
}

// POST endpoint kojim dodajemo knjige u bazu podataka
const addBook = () => {

    const title = document.getElementById('book-title').value;
    const genre = document.getElementById('book-genre').value;
    const image = document.getElementById('book-image').value;
    const authorId = document.getElementById('author-id').value;

    fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            name: title,
            genre: genre,
            image: image,
            authorId: authorId
        })
    })
    .then(res => {
        console.log(res);
    })
}

// funckija koju koristima za izmjenu podataka o knjigama
const putBookForm = (bookid,title,genre,image,authorid) => {

    let VARbookID = bookid;
    let VARtitle = title;
    let VARgenre = genre;
    let VARimage = image;
    let VARauthorID = authorid;

    const putMethod = document.getElementById('put-method');

    let resultPutMethodHTML = '';

    resultPutMethodHTML += `
    <div class="modal-body">
        <form>
            <div class="mb-3">
                <label for="book-Id" class="col-form-label">Book ID: </label>
                <input type="text" class="form-control" id="put-method-book-id" value="${VARbookID}">
                <label for="book-title" class="col-form-label">Title: </label>
                <input type="text" class="form-control" id="put-method-book-title" value="${VARtitle}">
                <label for="book-genre" class="col-form-label">Genre: </label>
                <input type="text" class="form-control" id="put-method-book-genre" value="${VARgenre}">
                <label for="book-image" class="col-form-label">Cover image: </label>
                <input type="text" class="form-control" id="put-method-book-image" value="${VARimage}">
                <label for="author-id" class="col-form-label">Author ID: </label>
                <input type="text" class="form-control" id="put-method-author-id" value="${VARauthorID}">
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="putBook()">Submit</button>
    </div>
    `;

    putMethod.innerHTML = resultPutMethodHTML;
}

// PUT endpoint kojim mijenjamo podatke o već postojećim knjigama
const putBook = () => {

    const bookId = document.getElementById('put-method-book-id').value;
    const title = document.getElementById('put-method-book-title').value;
    const genre = document.getElementById('put-method-book-genre').value;
    const image = document.getElementById('put-method-book-image').value;
    const authorId = document.getElementById('put-method-author-id').value;

    fetch(`${BASE_URL}/books`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            bookId: bookId,
            name: title,
            genre: genre,
            image: image,
            authorId: authorId
        })
    })
    .then(res => {
        console.log(res);
    })
}

// DELETE endpoint koji koristimo da "obrišemo" knjigu (brišemo sve podatke o knjizi)
const deleteBook = (id) => {
    fetch(`${BASE_URL}/books/${String(id)}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}
    })
    .then(res => {
        console.log(res);
    })
}
