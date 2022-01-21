let root = document.querySelector(".content");
let addItemBtn = document.querySelector(".add");
let item = document.querySelector(".item-input");
let category = document.querySelector(".category-input");


addItemBtn.addEventListener("click", function(event){
    if(item.value === "" || category.value  === ""){
        alert("You cant leave boxes empty");
        return;
    }
    let div = document.createElement("div");
    div.classList.add("item-container", "flex", "justify-bt", "flex-dir-col");

    let span = document.createElement("span");
    span.classList.add("cat");
    span.innerText = category.value;
    span.setAttribute("contenteditable", "true");

    let p = document.createElement("p");
    p.innerText = item.value;
    p.classList.add("item");
    p.setAttribute("contenteditable", "true");

    div.append(span, p);
    root.append(div);
});