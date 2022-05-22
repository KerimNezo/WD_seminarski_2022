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
