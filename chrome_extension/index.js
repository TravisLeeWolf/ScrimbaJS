let myLinks = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const linksEl = document.getElementById("links-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");

const  savedLinks = JSON.parse(localStorage.getItem("myLinks"));
if (savedLinks) {
    myLinks = savedLinks;
    render(myLinks);
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.removeItem("myLinks");
    myLinks = [];
    render(myLinks);
});

tabBtn.addEventListener("click", function() {
    // Read more about the Chrome extensions API
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLinks.push(tabs[0].url);
        localStorage.setItem("myLinks", JSON.stringify(myLinks));
        render(myLinks);
    });
});

inputBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        myLinks.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLinks", JSON.stringify(myLinks));
        render(myLinks);
    }
});

function render(links) {
    let listItems = "";
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${links[i]}">
                    ${links[i]}
                </a>
            </li>
        `
    }
    linksEl.innerHTML = listItems;
}