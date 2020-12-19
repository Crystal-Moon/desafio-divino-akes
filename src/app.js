

//import {AppLib} from './app-core/lib';
//import './mycss.css';
//import './mycss2.css';

//let appLib = new AppLib();
let runOnTop = function() {
  Neutralino.os.runCommand('onTop.exe', 
    function (data) {}, 
    function (err) {
      alert("Surgió un error con la funcion 'siempre visible', utilice la forma alternativa");
    })
}
/*
let myapp = {
    myfunction : function () { 
        document.getElementById('info').innerHTML = NL_NAME + 
        " is running on port " +
        NL_PORT + " inside " + NL_OS + "<br/><br/>" 
        + "<span>v" + NL_VERSION + "</span>"; 
    }
};
*/

Neutralino.init({
    load: function() {
        window.setMyTop= runOnTop;
        //myapp.myfunction();
        //appLib.showSettings();
    },
    pingSuccessCallback : function() {

    },
    pingFailCallback : function() {

    }
});