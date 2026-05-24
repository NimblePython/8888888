

let element = document.querySelector("#btn1");
btn.addEventListener("click", function() {

    let element = document.querySelector("#task1");
    if (btn.checked) {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
    }
});
