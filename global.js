const p_cor = {

    // base: "#8b008b",

    base:"#AC3EB5",

    foco:"rgb(125,255,212)",

    // erro: "#F4796B",

    erro:"#D2545B",

    erro_1:"#F9A0A0",

    // acerto: "#64DD17"

    acerto: "#53CD5F",

    acerto_1: "#C4FDBF",


    alerta: "#EFAD4D",

    alerta_1:  "#FCCD89",

  }



const elogios = ["MUITO BEM!", "BOM TRABALHO!", "EXCELENTE!", "PERFEITO!", "CORRETO!"];

shuffle(elogios, elogios.length-1)


var inc_elogios =0;





  
if (document.images) {

    var img_exit = new Image();
    img_exit.src = "../src/img/top/exit.svg";
    var img_fullOn = new Image();
    img_fullOn.src = "../src/img/top/fullOn.svg";
    var img_fullOff = new Image();
    img_fullOff.src = "../src/img/top/fullOff.svg";


}



img_fullOff.onload = function () { // carregamento da última imagem
    console.log("Carregado");


    document.getElementById('loading').style.display = "none";
  

};





var som_acerto = new Howl({
    src: ['../src/som/acerto.mp3'],
});

var som_erro = new Howl({
    src: ['./src/som/erro.mp3'],
});

var som_click1 = new Howl({
    src: ['../src/som/click1.mp3'],
});

var som_win = new Howl({
    src: ['../src/som/win.mp3'],
});

var som_alerta = new Howl({
    src: ['../src/som/alerta.mp3'],
});








function playSound(val) {

    if (val == 0) som_erro.play();
    if (val == 1) som_acerto.play();
    if (val == 2) som_click1.play();
    if (val == 3) som_win.play();
    if (val == 4) som_alerta.play();


}


function shuffle(array, last) {
    let currentIndex = array.length, randomIndex;


    while (currentIndex != 0) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    if (array[0] == last) {

        let temp_primeira = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = temp_primeira;

    }

    return array;
}


function resizeGame() {

    let wd = window.innerWidth;
    let hg = window.innerHeight;

    let top = document.getElementById('divTop').style;
    let game = document.getElementById('divGame').style;
    let bottom = document.getElementById('divBottom').style;

    let topvar = 0;


    if (wd < hg) { // portrait

        topvar = 0.07;

    }

    else { // land

        topvar = 0.1;

    }

    top.height = hg * topvar + "px";
    bottom.height = hg * topvar * 2 + "px";
    game.height = hg - (hg * topvar * 3) + "px";
    game.top = hg * topvar + "px";

}


resizeGame();
window.addEventListener('resize', resizeGame, false);
window.addEventListener('orientationchange', resizeGame, false);



let isFull = false;
let element = document.documentElement;

document.addEventListener("fullscreenchange", function () {
    if (this.fullscreenElement != null) {
        isFull = true;
    } else {
        isFull = false;
    }
    if (isFull) {
        document.getElementById("full").innerHTML = " <img src='../src/img/top/fullOff.svg' onclick='openFullscreen()'> ";
    } else {

        document.getElementById("full").innerHTML = " <img src='../src/img/top/fullOn.svg' onclick='openFullscreen()'> ";
    }
});



function openFullscreen() {

    if (!isFull) {
        console.log('called');
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }

    }

}
