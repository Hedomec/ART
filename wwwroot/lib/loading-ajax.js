var _noMostrarPantallaCargandoAjax = false;

$(document).ready(function () {
    //Crea una mascara que aparece cuando ocurre una llamada en Ajax
    $("body").append('<div id="loadingMask" style="display:table;text-align: center;z-index:10014;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=50);opacity: 0.5;"><span style="color:white;font-weight:bold;font-size:x-large;vertical-align:middle;display:table-cell;">Loading<img src="/images/loading_2x.gif" /></span></div>');
    $("#loadingMask").hide();
    $(document).ajaxSend(function () {
        if (_noMostrarPantallaCargandoAjax)
            _noMostrarPantallaCargandoAjax = false;
        else
            $("#loadingMask").show();
    }).ajaxStop(function () {
        $("#loadingMask").hide();
    }).ajaxError(function () {
        //alert("Ocurrio un error en la carga de la informacion. Se recomienda refrescar la pagina.");
        $("#loadingMask").hide();
    });
});