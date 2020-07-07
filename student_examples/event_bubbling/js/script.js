const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

console.log(grandparent);

function randomColor(e) {
    function randomNum() {
        return Math.floor(Math.random() * 256);
    }

    e.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

grandparent.addEventListener("click", randomColor);
parent.addEventListener("click", randomColor);
child.addEventListener("click", randomColor);