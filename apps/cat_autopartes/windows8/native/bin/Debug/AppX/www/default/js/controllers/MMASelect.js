
/* JavaScript content from js/controllers/MMASelect.js in folder common */
var MMobj;
function setMarcas(pTipo){
	var marcas = [];
	
	var filters = getFilters();
	var byTipo = JSON.search(Defiant.getSnapshot(filters), '//*[tipo="' + pTipo + '"]');
	
	MMobj = byTipo;
	
	$.each(byTipo, function(index, value){
		if($.inArray(value.marca, marcas) == -1){
			marcas.push(value.marca);
		}
	});
	
	$('#selMarca option[value!="0"]').remove();
	
	$.each(getMarcas(marcas),function(index,value){
		$('#selMarca').append('<option value="' + value.id + '" image="' + value.picture + '">' + value.name + '</option>');
	});
	$('#selMarcas').trigger('change');
}
function setModelos(pModelos){
	$('#selModelo option[value!="0"]').remove();
	
	$.each(pModelos,function(index,value){
		$('#selModelo').append('<option value="' + value.id + '" anio_i="' + value.anio_i + '" anio_f="' + value.anio_f + '">' + value.modelo + '</option>');
	});
	$('#selModelo').trigger('change');
}
function getFilters(){
	return [
	        {id:"1", marca:"Audi", modelo:"A3", tipo:"Sedan", anio_i:"1996", anio_f:"2011"},
	        {id:"2", marca:"Audi", modelo:"A4", tipo:"Sedan", anio_i:"1997", anio_f:"2011"},
	        {id:"3", marca:"Audi", modelo:"A5", tipo:"Sedan", anio_i:"2005", anio_f:"2011"},
	        {id:"4", marca:"Chevrolet", modelo:"Chevy", tipo:"Compacto", anio_i:"1993", anio_f:"2012"},
	        {id:"5", marca:"Chevrolet", modelo:"Suburban", tipo:"Suv", anio_i:"1973", anio_f:"2012"},
	        {id:"7", marca:"Chevrolet", modelo:"Cheyenne", tipo:"PickUp", anio_i:"1968", anio_f:"2012"},
	        {id:"8", marca:"Chevrolet", modelo:"Custom", tipo:"PickUp", anio_i:"1968", anio_f:"2011"},
	        {id:"9", marca:"Chevrolet", modelo:"S10", tipo:"PickUp", anio_i:"1982", anio_f:"2005"},
	        {id:"10", marca:"Chevrolet", modelo:"Silverado", tipo:"PickUp", anio_i:"1988", anio_f:"2012"},
	        {id:"11", marca:"Chrysler", modelo:"Caravan", tipo:"Suv", anio_i:"1984", anio_f:"2010"},
	        {id:"12", marca:"Dodge", modelo:"RAM", tipo:"PickUp", anio_i:"1973", anio_f:"2012"},
	        {id:"13", marca:"Ford", modelo:"Fiesta", tipo:"Compacto", anio_i:"1995", anio_f:"2012"},
	        {id:"14", marca:"Ford", modelo:"Explorer", tipo:"Suv", anio_i:"1985", anio_f:"2012"},
	        {id:"15", marca:"Ford", modelo:"F-250", tipo:"PickUp", anio_i:"1967", anio_f:"2012"},
	        {id:"16", marca:"Ford", modelo:"Lobo", tipo:"PickUp", anio_i:"1996", anio_f:"2012"},
	        {id:"17", marca:"Ford", modelo:"Ranger", tipo:"PickUp", anio_i:"1903", anio_f:"2012"},
	        {id:"18", marca:"GMC", modelo:"Sierra", tipo:"PickUp", anio_i:"1973", anio_f:"2012"},
	        {id:"19", marca:"Honda", modelo:"Accord", tipo:"Sedan", anio_i:"1986", anio_f:"2012"},
	        {id:"20", marca:"Honda", modelo:"Civic", tipo:"Sedan", anio_i:"1988", anio_f:"2011"},
	        {id:"21", marca:"Honda", modelo:"CR-V", tipo:"Suv", anio_i:"1997", anio_f:"2012"},
	        {id:"22", marca:"Jeep", modelo:"Grand Cherokee", tipo:"Suv", anio_i:"2005", anio_f:"2010"},
	        {id:"23", marca:"Nissan", modelo:"Maxima", tipo:"Sedan", anio_i:"1989", anio_f:"2012"},
	        {id:"24", marca:"Nissan", modelo:"Sentra", tipo:"Sedan", anio_i:"1989", anio_f:"2012"},
	        {id:"25", marca:"Nissan", modelo:"Pathfinder", tipo:"Suv", anio_i:"1989", anio_f:"2012"},
	        {id:"26", marca:"Nissan", modelo:"D21 (Estaca)", tipo:"PickUp", anio_i:"1986", anio_f:"2011"},
	        {id:"27", marca:"Seat", modelo:"Toledo", tipo:"Sedan", anio_i:"1993", anio_f:"2011"},
	        {id:"28", marca:"Seat", modelo:"Leon", tipo:"Sedan", anio_i:"1999", anio_f:"2011"},
	        {id:"29", marca:"Toyota", modelo:"Camry", tipo:"Sedan", anio_i:"1987", anio_f:"2012"},
	        {id:"30", marca:"Toyota", modelo:"Corolla", tipo:"Sedan", anio_i:"1988", anio_f:"2012"},
	        {id:"31", marca:"Toyota", modelo:"4 Runner", tipo:"Suv", anio_i:"1984", anio_f:"2009"},
	        {id:"32", marca:"Toyota", modelo:"Tacoma", tipo:"PickUp", anio_i:"1995", anio_f:"2011"},
	        {id:"33", marca:"Volkswagen", modelo:"Golf", tipo:"Sedan", anio_i:"1987", anio_f:"2012"},
	        {id:"34", marca:"Volkswagen", modelo:"Jetta", tipo:"Sedan", anio_i:"1987", anio_f:"2012"}
	        ];
}
function getMarcas(pMarcas){
	var aRet = [];
	var aMarcas = [
	        {"id":"1", "name":"Audi", "picture":"images/general/marcas/audiLogo.png"},
	        {"id":"2", "name":"Chevrolet", "picture":"images/general/marcas/chevroletLogo.jpeg"},
	        {"id":"3", "name":"Chrysler", "picture":"images/general/marcas/chryslerLogo.png"},
	        {"id":"4", "name":"Dodge", "picture":"images/general/marcas/dodgeLogo.png"},
	        {"id":"5", "name":"Ford", "picture":"images/general/marcas/fordLogo.png"},
	        {"id":"6", "name":"GMC", "picture":"images/general/marcas/gmcLogo.png"},
	        {"id":"7", "name":"Honda", "picture":"images/general/marcas/hondaLogo.png"},
	        {"id":"8", "name":"Jeep", "picture":"images/general/marcas/jeepLogo.png"},
	        {"id":"9", "name":"Nissan", "picture":"images/general/marcas/nissanLogo.png"},
	        {"id":"10", "name":"Seat", "picture":"images/general/marcas/seatLogo.png"},
	        {"id":"11", "name":"Toyota", "picture":"images/general/marcas/toyotaLogo.png"},
	        {"id":"12", "name":"Volkswagen", "picture":"images/general/marcas/vwLogo.png"}
	        ];
	$.each(pMarcas, function(index, value){
		aRet.push(
			JSON.search(Defiant.getSnapshot(aMarcas), '//*[name="' + value + '"]')[0]
		);
	});
	return aRet;
}
function getModelos(pMarca){
	return [
	        {"id":"1", "name":"Modelo1"},
	        {"id":"2", "name":"Modelo2"},
	        {"id":"3", "name":"Modelo3"},
	        {"id":"4", "name":"Modelo4"},
	        {"id":"5", "name":"Modelo5"},
	        {"id":"6", "name":"Modelo6"},
	        ];
}

function listViewMMA(){
	//TODO cambio de vista
}

function goToFamilias(){
	//TODO Verificar campos
	if($('#selMarca').val() != '0' && $('#selModelo').val() != '0'){
		var imgMarca = $('#selMarca option:selected').attr('image');
		$('#divMarcaImage, #divMarcaImageProd').html('<img height="100%" src="' + imgMarca + '" />');
		
		$('#lblAutoModelo, #lblAutoModeloProd').text($('#selModelo option:selected').text());
		$('#lblAutoAnio, #lblAutoAnioProd').text($('#range-1a').val() + " - " + $('#range-1b').val());
	}
	else{
		//TODO Message
	}
	
	
	location.href = "#familias";
}