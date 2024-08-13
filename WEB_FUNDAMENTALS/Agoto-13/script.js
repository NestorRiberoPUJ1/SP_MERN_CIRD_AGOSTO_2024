

var navLinks = document.querySelectorAll('button.nav-links');

navLinks.forEach((navLink) => {
    navLink.onclick = (e) => {
        console.log(e.target);//e.target es el elemento que se clickeo
        navLinks.forEach((element) => {
            element.removeAttribute('selected');
        });
        navLink.setAttribute('selected', 'true');
    }
});


/* setTimeout(() => {
    var main = document.querySelector('main');
    main.innerHTML += '<h1>¡Bienvenido a la página!</h1>';
}, 5000); */

/* var contador = 10;
var interval = setInterval(() => {
    if (contador === 0) {
        clearInterval(interval);
        return;
    }
    var main = document.querySelector('main');
    main.innerHTML += `<h2>${contador}</h2>`;
    contador--;
}, 1000); */

const nuevaBusqueda=(elemento)=>{
    console.log(elemento.value);
}

const toggleSearch=()=>{
    const searchIpt=document.querySelector('#searchIpt');
    searchIpt.toggleAttribute('disabled');
}