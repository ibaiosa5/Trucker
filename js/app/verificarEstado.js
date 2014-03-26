var APP = APP || {};


APP.verificarEstado = (function(){
  var RANGO =100;
  var RMUNDO =6371000;
  var posicionActual;
  var ultimaPosicion = 0;
  var ruta =[];

    var posicion = function(){
        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        function success(pos) {
          var crd = pos.coords;
        }

        function error(err) {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
        return crd;
      };

    var guardarPosicion=function(pos){
      ruta.push({
          'lat' : 'pos.latitude',
          'lng' : 'pos.longitude'
      });
    };

    var toRadians = function(grados){
      return grados * (Math.PI/180);
    };

    var calcularDistancia = function(punto1,punto2){
      var dist = Math.acos(Math.sin(toRadians(punto1.lat))*Math.sin(toRadians(punto2.lat))+Math.cos(toRadians(punto1.lat))*Math.cos(toRadians(punto2.lat))*Math.cos(toRadians(punto1.lng)-toRadians(punto2.lng)))*RMUNDO;
    };

    var verificarPosicion = function(posicionActual,ultimaPosicion){
      var udist = calcularDistancia(posicionActual,ruta[ultimaPosicion]);
      var nextdist = calcularDistancia(posicionActual,ruta[ultimaPosicion+1]);
      while(nextdist<udist){
        ultimaPosicion=ultimaPosicion++;
        udist = calcularDistancia(posicionActual,ruta[ultimaPosicion]);
        nextdist = calcularDistancia(posicionActual,ruta[ultimaPosicion+1]);
      }
      if(udist<RANGO){
        console.log("dentro de la ruta");
        return true;
      }
      else{
        console.log("fuera de la ruta");
        return false;
      }

    };

    var verificador = function(){
      // ruta = APP.Ruta.leerRuta(pasar la direccion al kml leido mediante el JSON de la ruta);
      posicionActual = posicion();
      guardarPosicion(posicionActual);
      verificarPosicion(posicionActual,ultimaPosicion);

    };
    return {
      calcularDistancia : calcularDistancia,
      posicion : posicion
    };

})();
var point1={lat : '40.6892',lng : ' -74.0444'};
var point2={lat : '48.8583',lng : ' 2.2945'};

APP.verificarEstado.calcularDistancia(point1,point2);