
/* JavaScript content from js/controllers/familias.js in folder common */
function listViewFamilias(){
	//TODO implementar vistas
}

function selectFamilia(pFamilia){
	var familias = [{'id':'#divDepo', 'image':'images/general/familias/depo.png', 'mercado':'Iluminación'},
	                {'id':'#divPolyway', 'image':'images/general/familias/polyway.png', 'mercado':'Espejos'},
	                {'id':'#divHu', 'image':'images/general/familias/hu.png', 'mercado':'Manijas'},
	                {'id':'#divTyg', 'image':'images/general/familias/tyg.png', 'mercado':'Carrocería'}];
	
	$.each(familias, function(index, value){
		//$(value.id).css('border-bottom','0');
		if(value.id == pFamilia){
			var width = "40%";
			if(value.id == '#divHu') width = "20%"; else width = "40%";
			$('#divFamiliaImage').html('<img src="' + value.image + '" width="' + width  + '" />');
			$('#lblFamilia').text(value.mercado);
			
		}
	});
	
	//$(pFamilia).css('border-bottom','3px solid #F15923');
	
	location.href = "#productos";
}