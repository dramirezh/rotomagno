function detallesProducto(pCarac, pDer, pImagen, pIzq, pMarca, pModelo, pProducto, pProveedor, pAnios, pUbicacion){
	$("#lblCaracteristicas").text(pCarac);
	$("#lblDer").text(pDer);
	$("#divFoto").html('<img id="imgFoto" onclick="openImage(this);" height="100%" src="' + pImagen + '" style="border-radius: 25px;" width="100%">');
	$("#lblIzq").text(pIzq);
	$("#lblMarca").text(pMarca);
	$("#lblModelo").text(pModelo);
	$("#lblProducto").text(pProducto);
	$("#lblProveedor").text(pProveedor);
	$("#lblAnios").text(pAnios);
	$("#lblUbicacion").text(pUbicacion);
	$("#cartNameProd").text(pProducto+' '+pModelo+' '+pMarca+' '+pAnios);
	$("#cartImage").attr("src",pImagen);
	location.href="#pge_details";
}

function openImage(pImagen){
	var url ="";
	url = $(pImagen).attr('src');
	$('#divPopupImg').html('<img class="popphoto" src="' + url + '" style="width:100%; height:100%; max-height:480px; max-width:320px">');
	$('#popupImg').popup('open');
}


$('txtSearch').text(value);








