(() => {
    'use strict';

    let counter = 10;

    const intervalId = setInterval(() => {
        counter -= 1;

        if (counter > 0) {
            const countId = document.getElementById('count');
            if (countId) {
                countId.textContent = String(counter);
            }
        }

        if (counter === 0) {
            const msgId = document.getElementById('msg');
            if (msgId) {
                msgId.textContent = 'Error: reload the page again.';
            }
            clearInterval(intervalId);
        }
    }, 1000);
})();
