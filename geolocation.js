
function iniciar() {
    if(!!navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostraCoords);
    } else {
        var campo = document.getElementById('coordenadas');
        campo.innerHTML = "Seu navegador não suporta geolocalização";
        campo.fontStyle = 'italic';
        campo.style.color = 'red';
    }

}

function mostraCoords(posicao) {
    console.dir(posicao);
    
    var campo = document.getElementById('coordenadas');
    campo.innerHTML = 'Lat: ' + posicao.coords.latitude + 
                      ' long: '+ posicao.coords.longitude;    
    
}


window.addEventListener('load',iniciar,false);