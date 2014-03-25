var APP = APP || {};

APP.verificarEstado = (function(){
    var posicion = function(){
        var options = {
          enableHighAccuracy: false,
          timeout: 25000,
          maximumAge: 0
        };

        function success(pos) {
          var crd = pos.coords;
          console.log('Latitud : ' + crd.latitude);
          console.log('Longitud: ' + crd.longitude);
        }

        function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
        //guardarPosicion(pos.coords)
    };
    /*
    var guardarPosicion=function(){
      ruta.push(pos.coords);
    };*/


    return {
      posicion : posicion
    };
})();

APP.verificarEstado.posicion();