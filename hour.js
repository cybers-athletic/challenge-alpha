function now(){
	var data = new Date(); 
	var hour = document.querySelector('#hour'); // select the element
	hour.textContent = data.toLocaleTimeString('pt-BR');
}
var autorefresh = setInterval(now, 1000); // run the function now() and update in 1 second
