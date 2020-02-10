(() => {
    const images = document.querySelectorAll('img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let score = 0;

    next.addEventListener('click', e => {
        score++;
        if (score === images.length) {
            score = 0;
        };

        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translate(${score * -50}vw, 0)`;
        };
    });

    prev.addEventListener('click', e => {
        score--;
        if (score < 0) {
            score = images.length - 1;
        };

        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translate(${score * -50}vw, 0)`;
        };
    });
})();