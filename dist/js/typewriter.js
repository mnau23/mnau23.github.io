const typeWriter = function (txtElement, words, wait = 1500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txtCurrent = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type method
typeWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;  // Current index of words
    const fullTxt = this.words[current];  // Full text of current word

    // If deleting: remove char; else: add char
    if (this.isDeleting) {
        this.txtCurrent = fullTxt.substring(0, this.txtCurrent.length - 1);
    } else {
        this.txtCurrent = fullTxt.substring(0, this.txtCurrent.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txtCurrent}</span>`;  // Insert txt into element

    let typeSpeed = 150;  // Initial speed
    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txtCurrent === fullTxt) {
        typeSpeed = this.wait;  // Pause at end
        this.isDeleting = true;
    } else if (this.isDeleting && this.txtCurrent === '') {
        this.wordIndex++;  // Move to next word
        this.isDeleting = false;
        typeSpeed = 500;  // Pause before start typing again
    }

    setTimeout(() => this.type(), typeSpeed);
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new typeWriter(txtElement, words, wait);  // Init typewriter
}
