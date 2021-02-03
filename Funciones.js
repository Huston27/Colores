
function cambio(){
    
    function color(){
        var simbolos, colorRandom;
        simbolos = "0123456789ABCDEF";
        colorRandom = "#";
    
        for(var i = 0; i < 6; i++){
            colorRandom = colorRandom + simbolos[Math.floor(Math.random() * 16)];
        }
    }

    var elemento = document.getElementById('caja');

    elemento.setAttribute('style', 'background-color: '+color()+';')
}


function actualizarhora(){

    var fecha, horas, minutos, segundos, pHoras, pMinutos, pSegundos;

    fecha = new Date();
    horas = fecha.getHours();
    minutos = fecha.getMinutes();
    segundos = fecha.getSeconds();
    
    pHoras = document.getElementById('hora');
    pMinutos = document.getElementById('minutos');
    pSegundos = document.getElementById('segundos');
    
    if(horas>=12){
        horas = horas - 12;
    }

    if (horas == 0) {
        horas = 12;
    }

    pHoras.textContent = horas;


    
    actualizarhora();
    }