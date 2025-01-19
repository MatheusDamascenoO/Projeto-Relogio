const horas = document.getElementById('horas')
const Minutos = document.getElementById('Minutos')
const Segundo = document.getElementById('Segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let segunds = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr; 

    if (min < 10) min = '0' + min; 

    if (segunds < 10) segunds = '0' + segunds; 


    Horas.textContent = hr;
    Minutos.textContent = min;
    Segundos.textContent = segunds;

} )
