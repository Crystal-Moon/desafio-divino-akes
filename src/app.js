
let runOnTop = function() {
  Neutralino.os.runCommand('onTop.exe', 
    function (data) {}, 
    function (err) {
      alert("Surgió un error con la funcion 'siempre visible', utilice la forma alternativa");
    })
}

Neutralino.init({
    load: function() {
        window.setMyTop= runOnTop;
    },
    pingSuccessCallback : function() {

    },
    pingFailCallback : function() {

    }
});