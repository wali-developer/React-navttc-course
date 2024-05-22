const test = document.getElementById("test");
test.innerText = "Welcome to Dom Manuipluation";

const p = document.createElement("p");
p.innerText = "This is paragraph create iwth create element function";
p.setAttribute("class", ".para");
test.appendChild(p);

const x = document.querySelectorAll("div.para");
console.log(x);
