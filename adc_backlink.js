function adcSelectPopulate() {

	//grab ID of template
	var idOfTemplate =  jQuery('#adc_select_select').val();
	
 	var templateText = backlink_templates[idOfTemplate];

	templateText = templateText.replace(/ CRLF /g, "\n");	

	jQuery('#adc_select_textbox').html(templateText);

}
