document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});


const buttons = document.querySelectorAll('.btn-add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
