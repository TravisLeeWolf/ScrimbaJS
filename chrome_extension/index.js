let myLinks = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const linksEl = document.getElementById("links-el");

let savedLinks = JSON.parse(localStorage.getItem("myLinks"));
if (savedLinks) {
    myLinks = savedLinks;
    renderLinks();
}

inputBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        myLinks.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLinks", JSON.stringify(myLinks));
        renderLinks();
    }
});

function renderLinks() {
    let listItems = "";
    for (let i = 0; i < myLinks.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${myLinks[i]}">
                    ${myLinks[i]}
                </a>
            </li>
        `
    }
    linksEl.innerHTML = listItems;
}