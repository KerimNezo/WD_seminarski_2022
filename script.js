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
