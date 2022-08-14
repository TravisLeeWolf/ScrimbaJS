### Code bits
```html
<script src="script.js"></script>
```
Having an external JS file

```javascript
console.log(someVar);
```
Same as print(someVar) in Python

```javascript
document.getElementById("id-name").innerText;
```
This allows us to access the text in a specific element

```html
<button onclick="someFunction()"></button>
```
onclick tells the HTML which fuction to run when clicked

If there are issues with displaying with innerText you can use
```javascript
    Node.textContent = content;
```
Node refers to the html element

```javascript
let element = document.querySelector("#element");
```
This is a more dynamic way of fetching elements where we need to specify it's css tag (In this case # for id)

```javascript
//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    console.log(count)
}
```

A better way to do onclick that separates control (html doesn't need any JS code inside)
```javascript
let someButton = document.getElementById("some-btn");
someButton.addEventListener("click", function() {
    // Do some stuff
});
```
In the above case, the onclick tag in HTML can be omitted

Two ways of creating HTML using JS
1. with innerHTML quciker but can be messy
```javascript
someEl.innerHTML = "<p>" + someVar + "</p>";
```
2. with createElement longer but more easy to edit
```javascript
const p = document.createElement("p");
p.textContent = someVar;
someEl.append(p);
```

Using template strings to simplify our HTML changes
```javascript
// Long and cumbersome
listItems += "<li><a target='_blank' href='" + myLinks[i] + "'>" + myLinks[i] + "</a></li>"

// using `` to make it more readable and easier to manage
listItems += `
    <li>
        <a target="_blank" href="${myLeads[i]}">
            ${myLeads[i]}
        </a>
    </li>
    `
```

Accessing the browsers local storage
```javascript
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.clear();
```

NOTE: When storing items using localStorage, it's only stored as a string,
        so first convert to JSON before storing
```javascript
// So this is to converst something like an array to JSON
localStorage.setItem("someList", JSON.stringify(values));
// Then to read it
let someList = JSON.parse(localStorage.getItem("someList")); 
```

### DOM (Document Object Model)
Document refering to the static HTML code
Object refering to the reperestation of an HTML element in JS
Model referin to the JavaScript code

