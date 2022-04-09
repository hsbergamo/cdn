
const MenbranaSynth = new Tone.MembraneSynth().toDestination();

const synth = new Tone.Synth().toDestination();
synth.set({ volume:-20});

const player = new Tone.Player("./metroLow.mp3").toDestination();
player.autostart = false;
const playerrit = new Tone.Player("./ritmo.mp3").toDestination();

playerrit.autostart = false;


for( i=0; i<8; i++){


  tempcell = "cel"+i;
document.getElementById(tempcell).disabled = true;


}


document.getElementById('limpar').disabled = true;
document.getElementById('conferir').disabled=true;


const numJogadas = 1;
const faseFinal = 6;



let wd = 1000;
let hg = 250;

let x1 = 30;
let x2 = 970;
let y = 210;




var cel = [

[1,0,0,0],
[1,0,1,0],
[1,1,1,1],
[1,0,1,1],
[1,1,1,0],
[1,1,0,1],
[1,1,0,0],
[1,0,0,1]


];

var ditado =[];

let numcells =3;

let emJogo = false;




//console.log(cel[2][0])



let cab1 ='<?xml version="1.0" encoding="UTF-8" standalone="no"?>';
let medidas ='<svg  viewBox="0 50 ' + wd +' ' +  hg + '"';
let cab2 = 'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny"> <title>ritmo</title>';

let line = '<polyline class="StaffLines" fill="none" stroke="#000000" stroke-width="2.73" stroke-linejoin="bevel" points="' +x1+',' + y + ' ' + x2 + ',' + y +'"/>';

let clave ='<path class="Clef" transform="matrix(0.892,0,0,0.892,40.438,210.454)" d="M12.2969,-25.2031 L1.29688,-25.2031 C0.59375,-25.2031 0,-24.5938 0,-23.9063 L0,23.9063 C0,24.5938 0.59375,25.2031 1.29688,25.2031 L12.2969,25.2031 C13,25.2031 13.5938,24.5938 13.5938,23.9063 L13.5938,-23.9063 C13.5938,-24.5938 13,-25.2031 12.2969,-25.2031 M33.9063,-25.2031 L22.9063,-25.2031 C22.2031,-25.2031 21.5938,-24.5938 21.5938,-23.9063 L21.5938,23.9063 C21.5938,24.5938 22.2031,25.2031 22.9063,25.2031 L33.9063,25.2031 C34.6094,25.2031 35.2031,24.5938 35.2031,23.9063 L35.2031,-23.9063 C35.2031,-24.5938 34.6094,-25.2031 33.9063,-25.2031"/>'
let compass1='<path class="TimeSig" transform="matrix(0.892,0,0,0.892,100.71,185.894)" d="M27.0156,-1.59375 L27.2188,-1.59375 C35.2188,-4.70313 35.7188,-9.90625 35.7188,-11.7031 L35.7188,-12.2031 C35.7188,-13.0938 35.4219,-24.4063 18.2188,-24.4063 C1.01563,-24.4063 1.51563,-12.2031 1.51563,-12.2031 L1.625,-12.2031 L1.51563,-12 C1.51563,-8.40625 4.42188,-5.59375 8.01563,-5.59375 C11.625,-5.59375 14.4219,-8.40625 14.4219,-12 C14.4219,-14.9063 12.2188,-17.7031 9.42188,-18.2969 L9.71875,-18.5938 C11.125,-19.5938 13.0156,-20.0938 14.9219,-20.0938 C19.125,-20.0938 23.625,-17.5938 23.625,-12.2031 C23.625,-5.90625 18.9219,-5 17.7188,-4.79688 C16.5156,-4.59375 10.9219,-4.20313 9.71875,-4.20313 C8.51563,-4.20313 8.42188,-2.79688 8.42188,-2.79688 L8.42188,-0.796875 C8.42188,-0.796875 8.625,0.296875 9.71875,0.40625 C11.4219,0.5 13.7188,0.5 16.9219,1 C21.3125,1.59375 23.625,4.59375 23.625,11.5938 C23.625,18.2969 19.125,20.0938 14.9219,20.0938 C12.125,20.0938 9.51563,19.2969 8.42188,18.5 C11.7188,18.2969 14.4219,15.4063 14.4219,12.0938 C14.4219,8.5 11.625,5.59375 8.01563,5.59375 C4.42188,5.59375 1.51563,8.5 1.51563,12.0938 C1.51563,12.0938 1.01563,16.5938 5.42188,20.7031 C9.3125,24.2969 14.2188,24.4063 16.4219,24.4063 C26.0156,24.4063 36.4219,21.0938 36.4219,10.2031 C36.4219,2.90625 31.4219,-0.203125 27.0156,-1.59375"/>'
let compass2 ='<path class="TimeSig" transform="matrix(0.8,0,0,0.892,100.788,235.122)" d="M3.59375,12.625 L20.7656,12.625 L20.7656,20.0781 L12.5469,20.0781 C11.7656,20.0781 11.125,20.7031 11.125,21.4844 L11.125,23.3906 C11.125,24.1719 11.7656,24.7969 12.5469,24.7969 L42.7969,24.7969 C43.5781,24.7969 44.2031,24.1719 44.2031,23.3906 L44.2031,21.4844 C44.2031,20.7031 43.5781,20.0781 42.7969,20.0781 L33.8594,20.0781 L33.8594,12.625 L42.7969,12.625 C43.5781,12.625 44.2031,12 44.2031,11.2188 L44.2031,9.3125 C44.2031,8.53125 43.5781,7.90625 42.7969,7.90625 L33.8594,7.90625 L33.8594,-8.0625 C33.8594,-8.59375 33.5469,-9.07813 33.0781,-9.3125 L31.8594,-9.92188 C31.3281,-10.1719 30.7031,-10.0781 30.2656,-9.6875 L21.2188,-1.375 C20.9375,-1.09375 20.7656,-0.734375 20.7656,-0.328125 L20.7656,7.90625 L9.25,7.90625 C9.25,7.90625 20.375,-4.125 32.2188,-19.8906 C33.0781,-21.0469 32.5781,-22.0938 32.3906,-22.2813 L30.2188,-24.4844 C29.9531,-24.75 29.5938,-24.9063 29.2188,-24.9063 C28.625,-24.9063 15.0625,-24.875 14.3438,-24.9063 C13.625,-24.9219 13.0938,-24.2969 13.0156,-23.6875 C13.0156,-23.6875 12.4844,-16.3281 9.875,-8.1875 C7.28125,-0.078125 4.34375,4.90625 1.6875,8.53125 C1.6875,8.53125 1.14063,9.51563 1.5,10.2656 C1.84375,11.0156 2.48438,12.0938 2.48438,12.0938 C2.48438,12.0938 2.73438,12.625 3.59375,12.625"/>'
let barline ='<polyline class="BarLine" fill="none" stroke="#000000" stroke-width="4.46" stroke-linejoin="bevel" points="950.2,165.234 950.2,247.162"/>'
let t1 = '<rect id="tempo1" x="175" y="100" width="240" height="135" fill="red"/>';
let t2 = '<rect id="tempo2" x="425" y="100" width="240" height="135" fill="red"/>';
let t3 = '<rect id="tempo3" x="675" y="100" width="240" height="135" fill="red"/>';


let nx = 130;
let celula1 ="";
let celula2 ="";
let celula3 ="";
let steam ="";
let nota_pos ="", nota_form ="";

let anterior =0;

let endGame = false;

let celAtual;

let quest1, quest2, resp1, resp2;
// let play = false;

function beamCell(pos){

    let beam, beam2, beam3, ponto="", _pos;

    if (pos == 1) pos_ = 212.5;
    if (pos == 2) pos_ = 462.5;




switch (celAtual){


    case 0:

        beam= '';
        beam2= '';
        beam3 = '';
        

         break;


    case 1:
      
        beam = '<rect x="'+pos_+'" y="125" width="120" height="15" fill="black"/>';
        beam2= '';
        beam3 = '';
      
        break;    

    case 2:

        beam = '<rect x="'+pos_+'" y="125" width="181" height="12" fill="black"/>';
        beam2 ='<rect x="'+pos_+'" y="143" width="181" height="12" fill="black"/>';
        beam3 = '';

      break;
    case 3:

        beam = '<rect x="'+pos_+'" y="125" width="181" height="12" fill="black"/>';
        beam2 ='<rect x="'+(pos_+119.5)+'" y="143" width="61" height="12" fill="black"/>';
        beam3 = '';
    
          break;    

    case 4:
        beam = '<rect x="'+pos_+'" y="125" width="121" height="12" fill="black"/>';
        beam2 ='<rect x="'+pos_+'" y="143" width="61" height="12" fill="black"/>';
        beam3 = '';
      
        break;

        case 5:

        beam = '<rect x="'+pos_+'" y="125" width="181" height="12" fill="black"/>';
        beam2 ='<rect x="'+pos_+'" y="143" width="21" height="12" fill="black"/>';
        beam3 ='<rect x="'+(pos_+159.5)+'" y="143" width="21" height="12" fill="black"/>';

      break;

      case 6:

        beam = '<rect x="'+pos_+'" y="125" width="61" height="12" fill="black"/>';
        beam2 ='<rect x="'+pos_+'" y="143" width="21" height="12" fill="black"/>';
        beam3 ='';
        ponto = '<circle cx="'+(pos_+72) +'" cy="200" r="4"  fill="black" />'

      break;

      case 7:

        beam = '<rect x="'+pos_+'" y="125" width="181" height="12" fill="black"/>';
        beam2 ='';
        beam3 ='<rect x="'+(pos_+159.5)+'" y="143" width="21" height="12" fill="black"/>';
        ponto = '<circle cx="'+(pos_+12) +'" cy="200" r="4"  fill="black" />'

      break;

    


}



this.txt= beam + beam2 + beam3 + ponto;


}





var ritmoSVG = cab1  +  medidas + cab2 + t1 + t2 + t3 + line + clave + compass1 + compass2+ barline+"</svg>";



document.getElementById("output").innerHTML = ritmoSVG;

let count = 0;

// window.setInterval(function(){


//   if (play)  sequencer();
  
// }, 250);

let currentTempo =0;


function sequencer(){

  var id = setInterval(runseq, 250);
  function runseq() {
    if (!emJogo) {
      clearInterval(id);
      
    } else {
     

    document.getElementById('tempo1').style.opacity = 0;
    document.getElementById('tempo2').style.opacity = 0;
    document.getElementById('tempo3').style.opacity = 0;

  if(count%4 ==0) { currentTempo+=1;

    // if(ditado[count]==1) player.start();
   
     synth.triggerAttackRelease("G6", "32n");

    if (currentTempo >3) currentTempo =1;}
  
  
  tempoAtual = 'tempo'+currentTempo;
    document.getElementById(tempoAtual).style.opacity = 0.4;



    if(ditado[count]==1)
    
    // playerrit.start();
    
    MenbranaSynth.triggerAttackRelease("G2", "8n");

    count+=1;
    if(count >11) {count=0;


    }

  }}

}


let fase=0;

function startGame(){


  document.getElementById('splash').style.display="none";
  Tone.start();
}

function novaFase(){

 if(!endGame){

  acertos=0;
//anterior =0;
  numcells +=1;
  document.getElementById('novaFase').style.visibility ="hidden";
//document.getElementById("barra").style.width =0;
  document.getElementById('novo').disabled=false;

 }
 else{
  document.getElementById('novaFase').style.visibility ="hidden";
  document.location.reload(true);

 }


}

function gerador(){

    limpar();

    document.getElementById("novo").disabled = true;
    play = true;

    count =0;
    currentTempo =0;
    nx =0;
    

    celAtual = Math.floor(Math.random()*numcells);
    quest1 = celAtual;


    nx+=130
    
    
    let beamC1 = new beamCell(1)

    celula1="";
    celula2="";
    celula3="";
    
    for (i =0; i< 4; i++){
    
        nx += 60;
    
    nota_pos ='<path class="Note" transform="matrix(0.8,0,0,0.8,'+ nx + ','+ y +'.454)"' 
    nota_form ='d="M31.5,-8.09375 C29.7031,-11.4063 25.9063,-13.2031 21.2969,-13.2031 C17.9063,-13.2031 14.2031,-12.2031 10.5938,-10.2969 C4,-6.79688 0,-0.90625 0,4.20313 C0,5.59375 0.296875,7 1,8.29688 C2.79688,11.5938 6.59375,13.2969 11.2031,13.2969 C14.5938,13.2969 18.2969,12.4063 21.9063,10.5 C28.5,7 32.5,1.09375 32.5,-4 C32.5,-5.40625 32.2031,-6.79688 31.5,-8.09375"/>'
    steam = '<polyline class="Stem" fill="none" stroke="#000000" stroke-width="2.73" stroke-linejoin="bevel" points="'+(nx+24) + ',' + (y-7) +' '  + (nx+24) + ',' + (y-84) + '"/>'
    
    
    if((cel[celAtual][i])==1) celula1 += nota_pos + nota_form + steam;
    
    ditado[i]=cel[celAtual][i];
    
    }

    


    nx+=10

    //createBeam(2);
    celAtual = Math.floor(Math.random()*numcells);
    quest2 = celAtual;

    let beamC2 = new beamCell(2)

    for (i =0; i< 4; i++){

        nx += 60;
      

    nota_pos ='<path class="Note" transform="matrix(0.8,0,0,0.8,'+ nx + ','+ y +'.454)"' 
    nota_form ='d="M31.5,-8.09375 C29.7031,-11.4063 25.9063,-13.2031 21.2969,-13.2031 C17.9063,-13.2031 14.2031,-12.2031 10.5938,-10.2969 C4,-6.79688 0,-0.90625 0,4.20313 C0,5.59375 0.296875,7 1,8.29688 C2.79688,11.5938 6.59375,13.2969 11.2031,13.2969 C14.5938,13.2969 18.2969,12.4063 21.9063,10.5 C28.5,7 32.5,1.09375 32.5,-4 C32.5,-5.40625 32.2031,-6.79688 31.5,-8.09375"/>'
    steam = '<polyline class="Stem" fill="none" stroke="#000000" stroke-width="2.73" stroke-linejoin="bevel" points="'+(nx+24) + ',' + (y-7) +' '  + (nx+24) + ',' + (y-84) + '"/>'


    if((cel[celAtual][i])==1) celula2 += nota_pos + nota_form + steam;
    ditado[i+4]=cel[celAtual][i];

    }


    ditado[8]=1;
    ditado[9]=0;
    ditado[10]=0;
    ditado[11]=0;


    celAtual = 0;



    nx += 70;

      nota_pos ='<path class="Note" transform="matrix(0.8,0,0,0.8,'+ nx + ','+ y +'.454)"' 
      nota_form ='d="M31.5,-8.09375 C29.7031,-11.4063 25.9063,-13.2031 21.2969,-13.2031 C17.9063,-13.2031 14.2031,-12.2031 10.5938,-10.2969 C4,-6.79688 0,-0.90625 0,4.20313 C0,5.59375 0.296875,7 1,8.29688 C2.79688,11.5938 6.59375,13.2969 11.2031,13.2969 C14.5938,13.2969 18.2969,12.4063 21.9063,10.5 C28.5,7 32.5,1.09375 32.5,-4 C32.5,-5.40625 32.2031,-6.79688 31.5,-8.09375"/>'
      steam = '<polyline class="Stem" fill="none" stroke="#000000" stroke-width="2.73" stroke-linejoin="bevel" points="'+(nx+24) + ',' + (y-7) +' '  + (nx+24) + ',' + (y-84) + '"/>'


      celula3 += nota_pos + nota_form + steam;

      ritmoSVG = cab1  +  medidas + cab2 + t1 + t2 + t3 + line + clave + compass1 + compass2+ barline + celula3 + "</svg>";
      console.log(ditado)

      document.getElementById("output").innerHTML = ritmoSVG;

      synth.set({ volume:-20});

      sequencer();

}

let countresp =0;

let respcel1 ="";
let beamC1 ="";
let respcel2 = "";
let beamC2 ="";

function responder(val){

  if(emJogo && val<= numcells-1){


    celAtual = val;


    if(countresp ==0){

    resp1 = val;

   respcel1 ="";
   beamC1 ="";
    nx=130;
    
    //createBeam(2);
    
     beamC1 = new beamCell(1);

    for (i =0; i< 4; i++){
    
        nx += 60;
      
    
    nota_pos ='<path class="Note" transform="matrix(0.8,0,0,0.8,'+ nx + ','+ y +'.454)"' 
    nota_form ='d="M31.5,-8.09375 C29.7031,-11.4063 25.9063,-13.2031 21.2969,-13.2031 C17.9063,-13.2031 14.2031,-12.2031 10.5938,-10.2969 C4,-6.79688 0,-0.90625 0,4.20313 C0,5.59375 0.296875,7 1,8.29688 C2.79688,11.5938 6.59375,13.2969 11.2031,13.2969 C14.5938,13.2969 18.2969,12.4063 21.9063,10.5 C28.5,7 32.5,1.09375 32.5,-4 C32.5,-5.40625 32.2031,-6.79688 31.5,-8.09375"/>'
    steam = '<polyline class="Stem" fill="none" stroke="#000000" stroke-width="2.73" stroke-linejoin="bevel" points="'+(nx+24) + ',' + (y-7) +' '  + (nx+24) + ',' + (y-84) + '"/>'
    
    
    if((cel[celAtual][i])==1) respcel1 += nota_pos + nota_form + steam;
    
    
    }


    }

   if(countresp ==1){



    resp2 = val;
    respcel2 ="";
     beamC2 ="";
      nx+=10;
      
      //createBeam(2);
      
       beamC2 = new beamCell(2);
      // console.log(beamC1)
  
  
  
      
      for (i =0; i< 4; i++){
      
          nx += 60;
        
      
      nota_pos ='<path class="Note" transform="matrix(0.8,0,0,0.8,'+ nx + ','+ y +'.454)"' ;
      nota_form ='d="M31.5,-8.09375 C29.7031,-11.4063 25.9063,-13.2031 21.2969,-13.2031 C17.9063,-13.2031 14.2031,-12.2031 10.5938,-10.2969 C4,-6.79688 0,-0.90625 0,4.20313 C0,5.59375 0.296875,7 1,8.29688 C2.79688,11.5938 6.59375,13.2969 11.2031,13.2969 C14.5938,13.2969 18.2969,12.4063 21.9063,10.5 C28.5,7 32.5,1.09375 32.5,-4 C32.5,-5.40625 32.2031,-6.79688 31.5,-8.09375"/>';
      steam = '<polyline class="Stem" fill="none" stroke="#000000" stroke-width="2.73" stroke-linejoin="bevel" points="'+(nx+24) + ',' + (y-7) +' '  + (nx+24) + ',' + (y-84) + '"/>';
      
      
      if((cel[celAtual][i])==1) respcel1 += nota_pos + nota_form + steam;
      
    
      
      }
  
    }
  



    ritmoSVG = cab1  +  medidas + cab2 + t1 + t2 + t3 + line + clave + compass1 + compass2+ barline + respcel1+ respcel2 + celula3 + beamC1.txt + beamC2.txt+"</svg>";


    if(countresp<2)  document.getElementById("output").innerHTML = ritmoSVG;
    countresp+=1;
    if(countresp >2)countresp = 2;

    document.getElementById('limpar').disabled = false;
    if(countresp>1) document.getElementById('conferir').disabled = false;

  }//emjogo

}



for( i=0; i<8; i++){


  tempcell = "cel"+i;
document.getElementById(tempcell).disabled = true;


}


function limpar(){

  for(i=0; i<numcells; i++){
    let tempcell = "cel"+i;

  document.getElementById(tempcell).disabled = false;
  }


  emJogo = true;

    document.getElementById('limpar').disabled = true;
    document.getElementById('conferir').disabled = true;

    respcel1 ="";
    beamC1 ="";
    respcel2 ="";
    beamC2 ="";
    countresp=0;
    ritmoSVG = cab1  +  medidas + cab2 + t1 + t2 + t3 + line + clave + compass1 + compass2+ barline + celula3 +"</svg>";


    document.getElementById("output").innerHTML = ritmoSVG;

}


let acertos = 0;
let progress =0;

function conferir(){

  let q1 = false, q2 =false;

  for( i=0; i<8; i++){


    tempcell = "cel"+i;
  document.getElementById(tempcell).disabled = true;
  
  
  }

emJogo = false

   
    document.getElementById('limpar').disabled = true;
    document.getElementById('conferir').disabled = true;

    // play = false;

    document.getElementById('tempo1').style.opacity = 0.5;
    document.getElementById('tempo2').style.opacity = 0.5;
    document.getElementById('tempo3').style.opacity = 0.5;

if(resp1 == quest1) {document.getElementById('tempo1').style.fill = "green"; q1 = true;


}
else{document.getElementById('tempo1').style.fill = "red";
}

if(resp2 == quest2) {document.getElementById('tempo2').style.fill = "green"; q2 = true;}
else{document.getElementById('tempo2').style.fill = "red";}

document.getElementById('tempo3').style.fill = "green";

if (q1 && q2){progress+=100/(numJogadas*faseFinal);  acertos+=1; move(progress);


}
else{  document.getElementById('novo').disabled=false;

const now = Tone.now()
;synth.set({ volume:-3});

synth.triggerAttackRelease("G5", "16n", now)
synth.triggerAttackRelease("C5", "16n", now + 0.1)


}


}



function move(val) {



const now = Tone.now()
synth.volume.value = -3;
synth.triggerAttackRelease("C5", "16n", now)
synth.triggerAttackRelease("G5", "16n", now + 0.1)



// const now = Tone.now()
// synth.volume.value = -3;
// synth.triggerAttackRelease("C5", "16n", now)
// synth.triggerAttackRelease("E5", "16n", now+0.1)
// synth.triggerAttackRelease("G5", "16n", now + 0.1)
// synth.triggerAttackRelease("E5", "16n", now+0.5)
// synth.triggerAttackRelease("G5", "16n", now + 0.6)
// synth.triggerAttackRelease("C6", "16n", now+0.7)


  let elem = document.getElementById("barra");
  let width = anterior;
  let id = setInterval(frame, 50);
  function frame() {
    if (width >= val) {
      clearInterval(id);

       document.getElementById('novo').disabled = false;

      if (acertos ==numJogadas){

 

        document.getElementById('novo').disabled = "true";
        fase+=1;
        if(fase<faseFinal){document.getElementById('fasetxt').innerHTML="<p>Parabéns!</p><p>Fase " + fase + " completa!</p>";
      
        synth.triggerAttackRelease("c6", "16n");
      
      
      }
        else{document.getElementById('fasetxt').innerHTML="<p>Parabéns,</p><p>Jogo completo!</p><p> Você ganhou 120 pontos.</p>";

              
          const now = Tone.now();
          synth.volume.value = -3;
          synth.triggerAttackRelease("C5", "16n", now);
          synth.triggerAttackRelease("E5", "16n", now+0.1);
          synth.triggerAttackRelease("G5", "16n", now + 0.2);
          synth.triggerAttackRelease("E5", "16n", now+0.5);
          synth.triggerAttackRelease("G5", "16n", now + 0.6);
          synth.triggerAttackRelease("C6", "16n", now+0.7);

        document.getElementById('btnovafase').innerHTML="Fechar";
        endGame = true;


      
      
      }



        document.getElementById('novaFase').style.visibility= "visible";


      }
      
    } else {
      width++;
      elem.style.width = width + '%';
      anterior = width;
    }
  }


}


