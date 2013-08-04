$('#home').on('pageinit', function(){
	
	//code needed for home page goes here
});	
		
$('#newMaint').on('pageinit', function(){

		var maintForm = $('#newMaint'),
			recordErrors= $("#MaintErrorLink")
			
		    maintForm.validate({
			invalidHandler: function(form, validator) {
				recordErrors.click();
				var html="";
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldName + '<li>';
				};
				$("#recordErrors ul").html(html);
				
			},
			
			submitHandler: function() {
		
		var data = maintForm.serializeArray();
			storeData(data);
		}
	});
	//any other code needed for addItem page goes here
	
});

parseForm = function(data) {
};

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	
};

var getData = function(){

};
var storeData = function(data, key){
	
};

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

