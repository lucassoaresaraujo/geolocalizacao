
//function iniciar() {
    if(!!navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostraCoords, trataGeoErros);
    } else {
        var campo = document.getElementById('coordenadas');
        campo.innerHTML = "Seu navegador não suporta geolocalização";
        campo.fontStyle = 'italic';
        campo.style.color = 'red';
    }
//}

var latitude;
var longitude;

function mostraCoords(posicao) {
    console.dir(posicao);
    
    var campo = document.getElementById('coordenadas');
    campo.innerHTML = 'Lat: ' + posicao.coords.latitude + 
                      ' long: '+ posicao.coords.longitude;
   latitude = posicao.coords.latitude;
   longitude = posicao.coords.longitude;
   initMap();
}


function trataGeoErros(erro) {
    var campo = document.getElementById('coordenadas');
    campo.fontStyle = 'italic';
    campo.style.color = 'red';
    switch(erro.code){
        case erro.PERMISSION_DENIED:
            campo.innerHTML = "Geolocalização não autorizada";
            break;
        case erro.POSITION_UNAVAILABLE:
            campo.innerHTML = "Geolocalização não disponivel";
            break;
        case erro.TIMEOUT:
            campo.innerHTML = "Tempo esgotado";
            break;
        default:
            campo.innerHTML = "Erro Desconhecido";
    }
}


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: this.latitude, lng: this.longitude},
    zoom: 17
  });
}

 

//window.addEventListener('load',iniciar,false);