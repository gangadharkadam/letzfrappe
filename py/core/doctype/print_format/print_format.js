cur_frm.cscript.refresh = function(doc, dt, dn) {
	if (doc.standard == 'Yes') {
		set_field_permlevel('html', 1);
		set_field_permlevel('doc_type', 1);
		set_field_permlevel('module', 1);
	}
}