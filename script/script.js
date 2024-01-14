document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', revealCardsOnScroll);
    revealCardsOnScroll(); // Run on initial load to check for cards already in view
});

function revealCardsOnScroll() {
    var cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        if (isElementInViewport(card)) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 
    );
}
