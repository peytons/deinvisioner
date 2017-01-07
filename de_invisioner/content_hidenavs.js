function hideNavs() {
	var elements = document.getElementsByClassName('highlight-tour');
	for (var i=0; i < elements.length; i++) {
		elements[i].style.display = 'none';
	}
    var elements2 = document.getElementsByClassName('powered-by');
	for (var i=0; i < elements2.length; i++) {
	    elements2[i].style.display = 'none';
	}
}

hideNavs();
