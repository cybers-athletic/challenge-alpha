
(function(doc) {

    hours = doc.querySelectorAll('ul li');
    founds = hours.length; 

    setInterval(function() {
        date = new Date();
        for (forI=0; forI<founds; forI++) {
            local=hours[forI].getAttribute('data-local');
            timezone=hours[forI].getAttribute('data-timezone');
            hourHtml = 'A hora local em %s é %s';
            hours[forI].innerHTML = hourHtml.replace(/%s/, local).replace(/%s/, date.toLocaleTimeString('pt-BR', { timeZone: timezone} ));
        }
    }, 500);

})(document);
