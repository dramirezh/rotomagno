
/* JavaScript content from js/controllers/initial.js in folder common */
var initialView = "grid";
function selectTipo(pTipo){
	var autos = ['#divCompacto','#divSedan','#divSuv','#divPickUp'];
	var url = "";
	
	$.each(autos, function(index, value){
		url = $(value + "Pic img").attr('src');
		$(value).css('color','#000000');
		if(url.indexOf("frente") >= 0){
			$(value + "Pic").html('<img style="height:80%; width:80%;' + (value == "#divSedan" ? "margin-top: 13%;" : '') + '" src="' + url.replace('frente','lado') + '"/>');
		}
	});
	
	url = $(pTipo + "Pic img").attr('src');
	$(pTipo + "Pic").html('<img style="height:65%; width:65%;' + (pTipo == "#divSedan" ? "margin-top: 13%;" : '') + '" src="' + url.replace('lado','frente') + '"/>');
	$('#divSelectedCarImg').html('<img style="height:30%; width:30%;" src="' + url.replace('lado','frente') + '"/>');
	$('#divTipoAutoImage, #divTipoAutoImageProd').html('<img width="90%" src="' + url.replace('lado','frente') + '" />');
	$('#lblSelectedCar, #lblTipoAuto').text(pTipo.replace('#div','').toUpperCase());
	
	$(pTipo).css('color','#F15923');
	$('#selMarca option[value!="0"]').remove();
	$('#selModelo option[value!="0"]').remove();
	
	$('#selModelo').trigger('change');
	$('#selMarca').trigger('change');
	setMarcas(pTipo.replace('#div',''));
}

function listView(){
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
}

function goToMMASelect(){
	//TODO check selected car
	location.href="#mma";
} 