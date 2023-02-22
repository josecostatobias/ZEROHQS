var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
//Window -> document -> resto do DOM
// controle play 1

    document.addEventListener("keydown", function (evento) {
        //controle play1
        if (evento.key === "ArrowUp") {
            moverParaCimaPlay1();
            console.log("cima");
        }
        if (evento.key === "ArrowDown") {
            moverParaBaixoPlay1();
            console.log("baixo");
        }
        if (evento.key === "ArrowLeft") {
            moverParaEsquedaPlay1();
            console.log("esqueda")
        }
        if (evento.key === "ArrowRight") {
            moverParaDireitaPlay1();
            console.log("direita")
        }
    })


document.addEventListener("keydown", function (event) {
         //controle play 2
    if (event.key === "w" || event.key === "W") {
        moverParaCimaPlay2();
        som();
        console.log("cima");
    }
    if (event.key === "s" || event.key === "S") {
        moverParaBaixoPlay2();
        console.log("baixo");
    }
    if (event.key === "a" || event.key === "A") {
        moverParaEsquedaPlay2();
        console.log("esqueda")
    }
    if (event.key === "d" || event.key === "D") {
        moverParaDireitaPlay2();
        console.log("direita")
    }
    })
    
//controle play 1
function moverParaCimaPlay1() {
    y1 = y1 - 5
    document.querySelector(".quadradoY").style.marginTop = `${y1}px`;
}
function moverParaBaixoPlay1() {
    y1 = y1 + 5
    document.querySelector(".quadradoY").style.marginTop = `${y1}px`;
} 
function moverParaEsquedaPlay1() {
    x1 = x1 - 5
    document.getElementById("quadradoX").style.marginLeft = `${x1}px`;
}

function moverParaDireitaPlay1() {
    x1 = x1 + 5
    document.getElementById("quadradoX").style.marginLeft = `${x1}px`;
    document.querySelector(".som").play()
}
//controle play 2
function moverParaCimaPlay2() {
    y2 = y2 - 50
    document.querySelector(".quadradoY2").style.marginTop = `${y2}px`;
}
function moverParaBaixoPlay2() {
    y2 = y2 + 50
    document.querySelector(".quadradoY2").style.marginTop = `${y2}px`;
} 
function moverParaEsquedaPlay2() {
    x2 = x2 - 50
    document.getElementById("quadradoX2").style.marginLeft = `${x2}px`;
}

function moverParaDireitaPlay2() {
    x2 = x2 + 50
    document.getElementById("quadradoX2").style.marginLeft = `${x2}px`;
}