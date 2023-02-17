var x = 0;
var y = 0;
function moverparabaixo() {
    x = x + 20

    document.querySelector(".quadrado").style.marginTop = `${x}px`;
}
function moverparacima() {
    x = x - 20

    document.querySelector(".quadrado").style.marginTop = `${x}px`;
}

function moverparadireita() {
    y = y + 20
    document.getElementById("quadrado1").style.marginLeft = `${y}px`;
}
function moverparaesqueda() {
    y = y - 20
    
    document.getElementById("quadrado1").style.marginLeft = `${y}px`;
}
