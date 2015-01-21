/**
 * Toggles the value of the dir attribute in the html tag,
 * dir="ltr" or dir="rtl"
 */
function toggleHTMLDir(){
	var html = document.getElementsByTagName("html")[0];
	if (html.dir == "ltr"){
		html.dir = "rtl";	
	} else {
		html.dir = "ltr";
	}
}