let inputele = document.getElementById("searchInput");
let spinnerele = document.getElementById("spinner");
let resultsele = document.getElementById("searchResults");
let resultmsg = document.getElementById("results");



function tocreateandappend(item) {
    let {
        imageLink,
        author
    } = item;

    let contele = document.createElement("div");
    contele.classList.add("box");
    resultsele.appendChild(contele);

    let imageele = document.createElement("img");
    imageele.src = imageLink;
    imageele.classList.add("image");
    contele.appendChild(imageele);

    let nameele = document.createElement("p");
    nameele.classList.add("name");
    nameele.textContent = author;
    contele.appendChild(nameele);

}

function displayresults(search_results) {
    for (let item of search_results) {
        tocreateandappend(item);
    }
}

inputele.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let searchele = event.target.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchele;
        spinnerele.classList.remove("d-none");
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerele.classList.add("d-none");
                let {
                    search_results
                } = jsonData;
                if (search_results === {}) {
                    resultmsg.textContent = "No results found.";
                } else {
                    resultmsg.textContent = "Popular Books";
                    displayresults(search_results);
                }
            });

    }
});