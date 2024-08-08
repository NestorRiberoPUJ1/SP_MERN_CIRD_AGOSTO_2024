


const handleClick = (element) => {
    console.log("CLICKED", element);
    element.style.backgroundColor = "blue";
    element.style.color = "white";
}

const handleMouseOver = () => {
    console.log("MOUSE OVER");
}

let botones = document.getElementsByClassName("btnClick");
console.log(botones);

for (const boton of botones) {
    console.log("BOTON ", boton);
    boton.onclick = (e) => handleClick(e.target);//HOMOLOGO DE THIS
    boton.onmouseover = (e) => handleMouseOver(e.target);
}

let btn4 = document.getElementById("btn4");
console.log(btn4);
btn4.addEventListener("mouseover", handleMouseOver);
btn4.addEventListener("click", () => {
    btn4.style.backgroundColor = "red";
});
btn4.onwheel = (event) => {
    console.log(event.deltaY);
    let currentRotateY = btn4.style.transform.replace("rotateY(", "").replace("deg)", "");
    if (isNaN(parseInt(currentRotateY))) {
        currentRotateY = 0;
    }
    const newRotateY = parseInt(currentRotateY) + ((parseInt(event.deltaY)) / 10);
    console.log("CURRENT", currentRotateY);
    btn4.style.transform = `rotateY(${newRotateY}deg)`;
};