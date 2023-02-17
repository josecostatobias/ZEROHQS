var x = 0;
var y = 0;

//Window -> document -> resto do DOM
// controle play 1

document.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowUp") {
        moverParaCima();
        console.log("cima");
    }
    if (evento.key === "ArrowDown") {
        moverParaBaixo();
        console.log("baixo");
    }
    if (evento.key === "ArrowLeft") {
        moverParaEsqueda();
        console.log("esqueda")
    }
    if (evento.key === "ArrowRight") {
        moverParaDireita();
        console.log("direita")
    }
})
//controle play 2
function moverParaCima() {
    x = x - 50
    document.querySelector(".quadradoY").style.marginTop = `${x}px`;
}
function moverParaBaixo() {
    x = x + 50
    document.querySelector(".quadradoY").style.marginTop = `${x}px`;
} 
function moverParaEsqueda() {
    y = y - 50
    document.getElementById("quadradoX").style.marginLeft = `${y}px`;
}

function moverParaDireita() {
    y = y + 50
    document.getElementById("quadradoX").style.marginLeft = `${y}px`;
}
