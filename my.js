var sec = document.getElementById('seconds');
var min = document.getElementById('minutes');
setInterval(() => {
    sec.innerText = parseInt(sec.innerText) - 1;
    if (sec.innerText === '0')
    {
        min.innerText = parseInt(min.innerText) - 1;
        sec.innerText = '60';
    }
}, 1000);