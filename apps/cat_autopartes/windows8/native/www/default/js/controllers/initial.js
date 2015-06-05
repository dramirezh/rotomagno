
/* JavaScript content from js/controllers/initial.js in folder common */
function selectTipo(pTipo){
	//var autos = ['#divCompacto','#divSedan','#divSuv','#divPickUp'];
	var url = "";
	
	/*$.each(autos, function(index, value){
		$(value).css('color','#000000');
		if(url.indexOf("frente") >= 0){
			$(value + "Pic").html('<img style="height:80%; width:80%;' + (value == "#divSedan" ? "margin-top: 13%;" : '') + '" src="' + url.replace('frente','lado') + '"/>');
		}
	});*/
	
	url = $(pTipo + "Pic img").attr('src');
	//$(pTipo + "Pic").html('<img style="height:65%; width:65%;' + (pTipo == "#divSedan" ? "margin-top: 13%;" : '') + '" src="' + url.replace('lado','frente') + '"/>');
	$('#divSelectedCarImg').html('<img style="height:30%; width:30%;" src="' + url + '"/>');
	$('#divTipoAutoImage, #divTipoAutoImageProd').html('<img width="90%" src="' + url.replace('inicio.png','frente.jpg') + '" />');
	$('#lblTipoAuto').text(pTipo.replace('#div','').toUpperCase());
	
	//$(pTipo).css('color','#F15923');
	$('#selMarca option[value!="0"]').remove();
	$('#selModelo option[value!="0"]').remove();
	
	$('#selModelo').trigger('change');
	$('#selMarca').trigger('change');
	setMarcas(pTipo.replace('#div',''));
	setFamilias(pTipo);
	location.href="#mma";
}

function setFamilias(pTipo){
	switch(pTipo){
	case "#divCompacto":
		$('#divDepo').css('top','42%').css('left','3%').css('height','15%').css('width','40%');
		$('#divPolyway').css('top','2%').css('right','33%').css('height','40%').css('width','15%');
		$('#divHu').css('top','8%').css('right','21%').css('height','35%').css('width','10%');
		$('#divTyg').css('top','12%').css('left','20%').css('height','29%').css('width','15%');
		$('#divSeparacion').css('height','25%');
		break;
	case "#divSedan":
		$('#divDepo').css('top','40%').css('left','6%').css('height','15%').css('width','30%');
		$('#divPolyway').css('top','2%').css('right','43%').css('height','40%').css('width','15%');
		$('#divHu').css('top','8%').css('right','28%').css('height','30%').css('width','10%');
		$('#divTyg').css('top','10%').css('left','20%').css('height','29%').css('width','15%');
		$('#divSeparacion').css('height','10%');
		break;
	case "#divSuv":
		$('#divDepo').css('top','38%').css('left','10%').css('height','15%').css('width','42%');
		$('#divPolyway').css('top','2%').css('right','32%').css('height','32%').css('width','15%');
		$('#divHu').css('top','14%').css('right','23%').css('height','35%').css('width','10%');
		$('#divTyg').css('top','15%').css('left','20%').css('height','22%').css('width','15%');
		$('#divSeparacion').css('height','25%');
		break;
	case "#divPickUp":
		$('#divDepo').css('top','38%').css('left','15%').css('height','15%').css('width','42%');
		$('#divPolyway').css('top','2%').css('right','32%').css('height','32%').css('width','15%');
		$('#divHu').css('top','14%').css('right','25%').css('height','35%').css('width','10%');
		$('#divTyg').css('top','15%').css('left','20%').css('height','22%').css('width','15%');
		$('#divSeparacion').css('height','25%');
		break;
	}
}


/*function listView(){
	var autos = ['#divCompacto','#divSedan','#divSuv','#divPickUp'];
	
	if(initialView == 'grid'){
		$.each(autos, function(index, value){
			$(value).css('width','100%');
			$(value).css('height','100%');
		});
		initialView = "list";
	}
	else{
		$.each(autos, function(index, value){
			$(value).css('width','50%');
			$(value).css('height','50%');
		});
		initialView = "grid";
	}
}*/

/*function goToMMASelect(){
	// check selected car
	location.href="#mma";
} */