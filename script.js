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
