var lang=document.querySelector("html").lang;

var opt;

if (lang=="zh") {
	opt=document.querySelector("option[value='ex0105.html']");
} else if (lang=="en") {
	opt=document.querySelector("option[value='ex0105-en.html']");
}

opt.selected=true;

document.getElementById("form").select.onchange=function() {
	location.href=document.getElementById("form").select.value;
}