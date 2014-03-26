var APP = APP || {};


APP.verificarEstado = (function(){
  var RANGO =100;
  var RMUNDO =6371000;
  var posicionActual;
  var ultimaPosicion = 0;
  var ruta =[];

  //Tiempo
  var estadoMarchaParado = "parado";





    var posicion = function(callback){

        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        function success(pos) {
          crd = {
          'lat' : pos.coords.latitude,
          'lng' : pos.coords.longitude
          };
          callback(crd);
        }

        function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
      };

    var guardarPosicion=function(pos){
      ruta.push(pos);
    };

    var toRadians = function(grados){
      return grados * (Math.PI/180);
    };

    var calcularDistancia = function(punto1,punto2,ultimaPosicion){
      return Math.acos(Math.sin(toRadians(punto1.lat))*Math.sin(toRadians(punto2.lat))+Math.cos(toRadians(punto1.lat))*Math.cos(toRadians(punto2.lat))*Math.cos(toRadians(punto1.lng)-toRadians(punto2.lng)))*RMUNDO;

    };

    var verificarPosicion = function(posicionActual,ultimaPosicion,recorrido){
      var udist = calcularDistancia(posicionActual,recorrido[ultimaPosicion]);
      var nextdist = calcularDistancia(posicionActual,recorrido[ultimaPosicion+1]);
      while(nextdist<udist){
        ultimaPosicion=ultimaPosicion+1;
        udist = nextdist;
        nextdist = calcularDistancia(posicionActual,recorrido[ultimaPosicion+1]);
      }
      if(udist<RANGO){
        console.log("dentro de la ruta");
      }
      else{
        console.log("Has salido de la ruta");
      }

    };

    var verificador = function(recorrido){
      posicion(function(pos){
                  guardarPosicion(pos);
                  verificarPosicion(pos,ultimaPosicion,recorrido);
              });
    };
    return {

      calcularDistancia : calcularDistancia,
      posicion : posicion,

      verificador:verificador

    };

})();
