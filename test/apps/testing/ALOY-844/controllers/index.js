function favorite() {
	alert('favorite fired');
}

if(Alloy.isTablet) {
	$.index.open();
} else {
	$.win.open();
}
