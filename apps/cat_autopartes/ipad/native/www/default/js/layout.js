
/* JavaScript content from js/layout.js in folder common */
function clsLayout(){
	
	this.data = _getData();
	this.createColumn = _createColumn;
	
	function _createColumn(producto){
		var prod = producto.Producto;
		return '<div class="grid">' +
               '<img src="'+ prod.Imagen.replace("[size]","medium") + 
               '" onclick=\'detallesProducto(\"' + prod.Caracteristicas +
               '\",\"' + prod.Der + 
               '\",\"' + prod.Imagen.replace("[size]","medium") + 
               '\",\"' + prod.Izq + 
               '\",\"' + prod.Marca +
               '\",\"' + prod.Modelo + 
               '\",\"' + prod.Producto +
               '\",\"' + prod.Proveedor + 
               '\",\"' + prod.RangoAnios + 
               '\",\"' + prod.Ubicacion + '\");\'/>' +
               	'<p>' +
               	prod.Marca + "-" + prod.Modelo + "-" + prod.Producto +
           		'</p>' +
               '</div>';
	}
	
	function _getData(){
		return {
			"GetBuscarProductosResult":[
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "201-0902-01",
			        "ID": "14211",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/201-0902-01.jpg",
			        "Izq": "",
			        "Marca": "DODGE",
			        "Modelo": "ATTITUDE",
			        "Origen": "",
			        "Producto": "COFRES",
			        "Proveedor": "",
			        "RangoAnios": "2012-2014",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "201-0608-02 ",
			        "ID": "14210",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/201-0608-02.jpg",
			        "Izq": "",
			        "Marca": "CHEVROLET",
			        "Modelo": "CAMARO",
			        "Origen": "",
			        "Producto": "COFRES",
			        "Proveedor": "",
			        "RangoAnios": "2012-2013",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "2 PUERTAS",
			        "Der": "201-0316-00 ",
			        "ID": "14209",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/201-0316-00.jpg",
			        "Izq": "",
			        "Marca": "BMW",
			        "Modelo": "SERIE 1",
			        "Origen": "",
			        "Producto": "COFRES",
			        "Proveedor": "",
			        "RangoAnios": "2008-2012",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "019-2001-02",
			        "ID": "14208",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/019-2001-02.jpg",
			        "Izq": "019-2001-03",
			        "Marca": "MERCEDES BENZ",
			        "Modelo": "CLASE A",
			        "Origen": "",
			        "Producto": "FAROS",
			        "Proveedor": "DEPO",
			        "RangoAnios": "2002-2005",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "019-2201-02",
			        "ID": "14207",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/019-2201-02.jpg",
			        "Izq": "019-2201-03",
			        "Marca": "MITSUBISHI",
			        "Modelo": "ECLIPSE",
			        "Origen": "",
			        "Producto": "FAROS",
			        "Proveedor": "DEPO",
			        "RangoAnios": "1995-1996",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "019-0615-06",
			        "ID": "14206",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/019-0615-07.jpg",
			        "Izq": "019-0615-07",
			        "Marca": "CHEVROLET",
			        "Modelo": "CHEYENNE",
			        "Origen": "",
			        "Producto": "FAROS",
			        "Proveedor": "DEPO",
			        "RangoAnios": "2007-2013",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "EXTERIOR, NEGRO LISO",
			        "Der": "012-2310-28",
			        "ID": "14205",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/012-2310-28.jpg",
			        "Izq": "012-2310-29",
			        "Marca": "NISSAN",
			        "Modelo": "MAXIMA",
			        "Origen": "",
			        "Producto": "MANIJAS",
			        "Proveedor": "",
			        "RangoAnios": "2004-2008",
			        "Ubicacion": "DELANTERA"
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "EXTERIOR, NEGRA CORRUGADA",
			        "Der": "012-1217-04",
			        "ID": "14204",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/012-1217-04.jpg",
			        "Izq": "012-1217-05",
			        "Marca": "FORD",
			        "Modelo": "FIESTA",
			        "Origen": "",
			        "Producto": "MANIJAS",
			        "Proveedor": "",
			        "RangoAnios": "1998-2002",
			        "Ubicacion": "TRASERA"
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "EXTERIOR, NEGRA",
			        "Der": "012-0622-00",
			        "ID": "14203",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/012-0622-00.jpg",
			        "Izq": "012-0622-01",
			        "Marca": "CHEVROLET",
			        "Modelo": "MALIBU",
			        "Origen": "",
			        "Producto": "MANIJAS",
			        "Proveedor": "",
			        "RangoAnios": "2004-2006",
			        "Ubicacion": "Delantera"
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "ELECTRICO CON DIRECCIONAL CROMADO",
			        "Der": "018-3007-10",
			        "ID": "14202",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/018-3007-10.jpg",
			        "Izq": "018-3007-11",
			        "Marca": "TOYOTA",
			        "Modelo": "HILUX",
			        "Origen": "",
			        "Producto": "ESPEJO",
			        "Proveedor": "",
			        "RangoAnios": "2012-2013",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "4 PUERTAS ELECTRICO CON DESEMPAÑANTE",
			        "Der": "018-1301-20",
			        "ID": "14201",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/018-1301-20.jpg",
			        "Izq": "018-1301-21",
			        "Marca": "HONDA",
			        "Modelo": "ACCORD",
			        "Origen": "",
			        "Producto": "ESPEJO",
			        "Proveedor": "",
			        "RangoAnios": "2003-2007",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "ELECTRICO CON DESEMPAÑANTE",
			        "Der": "018-0108-00",
			        "ID": "14200",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/018-0102-00.jpg",
			        "Izq": "018-0108-01",
			        "Marca": "ACURA",
			        "Modelo": "ILX",
			        "Origen": "",
			        "Producto": "ESPEJO",
			        "Proveedor": "",
			        "RangoAnios": "2013-2014",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "201-0902-01",
			        "ID": "14211",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/201-0902-01.jpg",
			        "Izq": "",
			        "Marca": "DODGE",
			        "Modelo": "ATTITUDE",
			        "Origen": "",
			        "Producto": "COFRES",
			        "Proveedor": "",
			        "RangoAnios": "2012-2014",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "201-0608-02 ",
			        "ID": "14210",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/201-0608-02.jpg",
			        "Izq": "",
			        "Marca": "CHEVROLET",
			        "Modelo": "CAMARO",
			        "Origen": "",
			        "Producto": "COFRES",
			        "Proveedor": "",
			        "RangoAnios": "2012-2013",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "2 PUERTAS",
			        "Der": "201-0316-00 ",
			        "ID": "14209",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/201-0316-00.jpg",
			        "Izq": "",
			        "Marca": "BMW",
			        "Modelo": "SERIE 1",
			        "Origen": "",
			        "Producto": "COFRES",
			        "Proveedor": "",
			        "RangoAnios": "2008-2012",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "019-2001-02",
			        "ID": "14208",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/019-2001-02.jpg",
			        "Izq": "019-2001-03",
			        "Marca": "MERCEDES BENZ",
			        "Modelo": "CLASE A",
			        "Origen": "",
			        "Producto": "FAROS",
			        "Proveedor": "DEPO",
			        "RangoAnios": "2002-2005",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "019-2201-02",
			        "ID": "14207",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/019-2201-02.jpg",
			        "Izq": "019-2201-03",
			        "Marca": "MITSUBISHI",
			        "Modelo": "ECLIPSE",
			        "Origen": "",
			        "Producto": "FAROS",
			        "Proveedor": "DEPO",
			        "RangoAnios": "1995-1996",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "",
			        "Der": "019-0615-06",
			        "ID": "14206",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/019-0615-07.jpg",
			        "Izq": "019-0615-07",
			        "Marca": "CHEVROLET",
			        "Modelo": "CHEYENNE",
			        "Origen": "",
			        "Producto": "FAROS",
			        "Proveedor": "DEPO",
			        "RangoAnios": "2007-2013",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "EXTERIOR, NEGRO LISO",
			        "Der": "012-2310-28",
			        "ID": "14205",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/012-2310-28.jpg",
			        "Izq": "012-2310-29",
			        "Marca": "NISSAN",
			        "Modelo": "MAXIMA",
			        "Origen": "",
			        "Producto": "MANIJAS",
			        "Proveedor": "",
			        "RangoAnios": "2004-2008",
			        "Ubicacion": "DELANTERA"
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "EXTERIOR, NEGRA CORRUGADA",
			        "Der": "012-1217-04",
			        "ID": "14204",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/012-1217-04.jpg",
			        "Izq": "012-1217-05",
			        "Marca": "FORD",
			        "Modelo": "FIESTA",
			        "Origen": "",
			        "Producto": "MANIJAS",
			        "Proveedor": "",
			        "RangoAnios": "1998-2002",
			        "Ubicacion": "TRASERA"
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "EXTERIOR, NEGRA",
			        "Der": "012-0622-00",
			        "ID": "14203",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/012-0622-00.jpg",
			        "Izq": "012-0622-01",
			        "Marca": "CHEVROLET",
			        "Modelo": "MALIBU",
			        "Origen": "",
			        "Producto": "MANIJAS",
			        "Proveedor": "",
			        "RangoAnios": "2004-2006",
			        "Ubicacion": "Delantera"
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "ELECTRICO CON DIRECCIONAL CROMADO",
			        "Der": "018-3007-10",
			        "ID": "14202",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/018-3007-10.jpg",
			        "Izq": "018-3007-11",
			        "Marca": "TOYOTA",
			        "Modelo": "HILUX",
			        "Origen": "",
			        "Producto": "ESPEJO",
			        "Proveedor": "",
			        "RangoAnios": "2012-2013",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "4 PUERTAS ELECTRICO CON DESEMPAÑANTE",
			        "Der": "018-1301-20",
			        "ID": "14201",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/018-1301-20.jpg",
			        "Izq": "018-1301-21",
			        "Marca": "HONDA",
			        "Modelo": "ACCORD",
			        "Origen": "",
			        "Producto": "ESPEJO",
			        "Proveedor": "",
			        "RangoAnios": "2003-2007",
			        "Ubicacion": ""
			    }
			},
			{
			    "Producto": {
			        "Caracteristicas": "ELECTRICO CON DESEMPAÑANTE",
			        "Der": "018-0108-00",
			        "ID": "14200",
			        "Imagen": "http://demos.solutiaintelligence.com:81/RefaccionariaExtensiones/Uploads/[size]/018-0102-00.jpg",
			        "Izq": "018-0108-01",
			        "Marca": "ACURA",
			        "Modelo": "ILX",
			        "Origen": "",
			        "Producto": "ESPEJO",
			        "Proveedor": "",
			        "RangoAnios": "2013-2014",
			        "Ubicacion": ""
			    }
			}
			]
		};
	}
}

function detalles(pCarac, pDer, pImagen, pIzq, pMarca, pModelo, pProducto, pProveedor, pAnios, pUbicacion){
	$("#lblCaracteristicas").text(pCarac);
	$("#lblDer").text(pDer);
	$("#divFoto").html('<img id="imgFoto" height="100%" src="' + pImagen + '" style="border-radius: 25px;" width="100%">');
	$("#lblIzq").text(pIzq);
	$("#lblMarca").text(pMarca);
	$("#lblModelo").text(pModelo);
	$("#lblProducto").text(pProducto);
	$("#lblProveedor").text(pProveedor);
	$("#lblAnios").text(pAnios);
	$("#lblUbicacion").text(pUbicacion);
	
	location.href="#pge_details";
}

function search(sSearching){
	var jsonRes;
	if(sSearching == ""){
		jsonRes = data.GetBuscarProductosResult;
	}else{
		jsonRes = JSON.search(Defiant.getSnapshot(data), '//*[contains(*,"' + sSearching + '")]');
	}
	$('#columns').html('');
	$.each(jsonRes, function(index,obj){
		$('#columns').append(lo.createColumn(obj));
	});
}