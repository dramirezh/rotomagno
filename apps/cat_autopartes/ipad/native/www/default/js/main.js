
/* JavaScript content from js/main.js in folder common */
var data;
var lo;
var swiper;
function wlCommonInit(){
	var value;
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
	//WL.JSONStore.destroy();
	
	var pages = getPages(); //pages object
	$.each(pages, function(idx, obj){
		$.get(obj.url, function(data){
			var pageContent = data.replace("{id}",obj.id);
			$('body').append(pageContent); //load page inside index.html
			
			if(obj.leftPanel && obj.leftPanel != "false")
			{
				$.get(obj.leftPanel.url, function(data){
					$("#" + obj.id).append(data.replace("{id}", obj.leftPanel.id));
				});
			}
			
			if(obj.header && obj.header != "false")
			{
				$.get(obj.header.url, function(data){
					var headerHTML = data.replace("{left}",obj.header.left).replace("{center}",obj.header.center).replace("{right}",obj.header.right);
					if(obj.leftPanel)
					{
						$("#" + obj.id).append(headerHTML.replace("{leftPanel}", "#" + obj.leftPanel.id));
					}
					else
					{
						$("#" + obj.id).append(headerHTML);
					}
				});
			}
			if(obj.popup && obj.popup != "false")
			{
				$.each(obj.popup, function(idx, popup){
					$.get(popup.url,function(data){
						$("#" + obj.id).append(
								data.replace("{id}", popup.id).
								replace("{header}", popup.header).
								replace("{title}", popup.title).
								replace("{content}", popup.content).
								replace("{ok_action}", popup.okButton.action).
								replace("{ok_location}", popup.okButton.location).
								replace("{ok_text}", popup.okButton.text).
								replace("{cn_action}", popup.cancelButton.action).
								replace("{cn_location}", popup.cancelButton.location).
								replace("{cn_text}", popup.cancelButton.text)
								);
					});
				});
			}
		});
	});
	
	setTimeout("initializeData();", 700);
}

function initializeData()
{
	//$('a').attr('data-transition','pop');	//general app transition
	
	//initLanguage();
	lo = new clsLayout();
	data = lo.data;
	$.each(data.GetBuscarProductosResult, function(index, producto){
		$('#columns').append(lo.createColumn(producto));
	});
	swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
	setElementEvents();
	location.href="#initial";
}

//Pages array to load on index
function getPages()
{
	//add each page to view in app
	//Examples:
	//for adding a header:
	////"header":{
	////	"url":"pages/general/header.html",
	////	"left":"<a></a>",
	////	"center":"<a></a>",
	////	"right":"<a></a>"
	////}
	//for adding a panel:
	////"leftPanel":{
	////	"id":"nav-panel",
	////	"url":"pages/general/left_panel.html"
	////}
	//for adding dialogs, you can add more then one
	////"popup":[
	////        {
	////        	 "url":"pages/general/popup.html",
	////        	 "id":"dialog", 
	////        	 "header":"myHeader", 
	////        	 "title":"Hi Dialog!", 
	////        	 "content":"You have to insert your own content here", 
	////        	 "okButton":{"action":"alert('ok button action');","location":"#login","text":"OK"}, 
	////        	 "cancelButton":{"action":"alert('cancel button action');","location":"","text":"Cancel"}
	////         }
	////         ]
	return [
			{"id":"initial", "url":"pages/initial.html"},
			{"id":"mma", "url":"pages/MMASelect.html",
				"header":{
				"url":"pages/general/header.html",
				"left":"<a href='#' data-rel='back' class='ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-left ui-icon-arrow-l'>Type</a>",
				"center":"<h1>Brand - Model - Year</h1>",
				"right":""
				}
			},
			{"id":"familias", "url":"pages/familias.html",
				"header":{
					"url":"pages/general/header.html",
					"left":"<a href='#' data-rel='back' class='ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-left ui-icon-arrow-l'>Auto</a>",
					"center":"<h1>Families</h1>",
					"right":""
					}
			},
			{"id":"productos", "url":"pages/productos.html",
				"header":{
					"url":"pages/general/header.html",
					"left":"<a href='#' data-rel='back' class='ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-left ui-icon-arrow-l'>Families</a>",
					"center":"<h1>Products</h1>",
					"right":""
					}
			},
			{"id":"pge_details", "url":"pages/detalles.html",
				"header":{
					"url":"pages/general/header.html",
					"left":"<a href='#' data-rel='back' class='ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-left ui-icon-arrow-l'>Products</a>",
					"center":"<h1>Details</h1>",
					"right":""
					}
			},
			{"id":"cart", "url":"pages/cart.html",
				"header":{
					"url":"pages/general/header.html",
					"left":"<a href='#' data-rel='back' class='ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-left ui-icon-arrow-l'>Back</a>",
					"center":"<h1>Cart</h1>",
					"right":""
					}
			}
	        ];
	
}

function setElementEvents(){
	$('#selMarca').change(function(){
		var selected = $("#selMarca option:selected");
		if($(selected).val() != '0'){
			var modelos = JSON.search(Defiant.getSnapshot(MMobj), '//*[marca="' + $(selected).text() + '"]');
			setModelos(modelos);
		}
		else{
			$("#selModelo option[value!='0']").remove();
			$('#selModelo').trigger('change');
		}
	});
	$('#selModelo').change(function(){
		var selected = $("#selModelo option:selected");
		if($(selected).val() != '0'){
			var inicio = $(selected).attr('anio_i');
			var fin = $(selected).attr('anio_f');
			setAnios(inicio,fin);
		}
		else{
			$("#selAnio option[value!='0']").remove();
			$('#selAnio').trigger('change');
		}
	});
	$('#txtSearch').donetyping(function(){
		search($('#txtSearch').val());
		location.href="#productos";
	});
	
	$('#txtSearchini').donetyping(function(){
		search($('#txtSearchini').val());
		location.href="#productos";
		
	});
	
	/*$('#productos').ready(function() {
		  $('txtSearch').text(value);
		});*/
}
/*function initLanguage(){
	 var locale = WL.App.getDeviceLocale();
	    var lang = WL.App.getDeviceLanguage();
	    WL.Logger.debug(">> Detected locale: " + locale);
	    WL.Logger.debug(">> Detected language: " + lang);

	    if (locale.indexOf("en")!=-1) languageChanged("english");
	    if (locale.indexOf("es")!=-1) languageChanged("spanish");
}*/
/* JavaScript content from js/main.js in folder ipad */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}