/*
* Author: Daniel Ilaro da Silva
* Data: 2018-10-17
*/


//função que acrescenta o 0 na frente do número quando necessário para não bagunçar as dimenções do site
function modelTime(n){
    if(n<10){
        n="0"+n;
    }
    return n; 
}

//função que calcula a mudança de utc
function scheduleTimeZone(utc){
    var date = new Date();
    var greenwich = date.getTimezoneOffset() + date.getMinutes();
    var newCity = utc * 60;

    date.setMinutes(greenwich+newCity);

    var clock = modelTime(date.getHours())+":"+modelTime(date.getMinutes())+":"+modelTime(date.getSeconds());

    return clock.toString();
}

//Função que inicia a apresentação dos relógios e entra em loop
function startClock(){
    document.getElementById("clock-brasilia").innerHTML = scheduleTimeZone(-3);
    document.getElementById("clock-london").innerHTML = scheduleTimeZone(1);
    
    
    var timeOut= setTimeout(function(){
        startClock()
    }, 500);
}