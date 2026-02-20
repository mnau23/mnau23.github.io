var counter = 10;
setInterval(function () {
    counter--;
    if (counter > 0) {
        countId = document.getElementById('count');
        countId.innerHTML = counter;
    }
    if (counter === 0) {
        msgId = document.getElementById('msg');
        msgId.innerHTML = 'Error: reload the page again.'
    }
}, 1000);
