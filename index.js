var barra = window.document.getElementById("barra");
document.addEventListener("scroll", scroll);
var animacao = window.document.getElementById("animacao");
var param = window.scrollY;

function scroll() {
    // barra.style.width = window.scrollY + "px";
    console.log(param);
    if (param != 0) {
        if (param % 53 == 0) {
            if (param > 477) {
                param -= 477;
            }
            if (param == 477) {
                param = 53;
            }
            console.log(param);
            animacao.src = `frames/frame0${param / 53}.png`;
        }
    }
}

function auto() {
    param += 53;
    scroll();
}

setInterval(auto, 100);
