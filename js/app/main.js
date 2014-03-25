var APP = APP||{};
APP.Controlador = (function(){
    "use strict";

    var muestraRuta = function(){
        console.log("Pintar ruta");
    };
    var muestraCamion = function(){
        console.log("Pintar camion");
    };
    var muestraRemolque = function(){
        console.log("Pintar remolque");
    };



        var laRuta = document.getElementById("ruta");
        laRuta.addEventListener("click", muestraRuta, false);
        console.log(laRuta);

          var elCamion = document.getElementById("camion");
        elCamion.addEventListener("click", muestraCamion, false);
          var elRemolque = document.getElementById("remolque");
        elRemolque.addEventListener("click", muestraRemolque, false);





});

APP.Controlador();