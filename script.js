document.addEventListener('click', function (event) {
    var isClickInside = document.querySelector('.navbar-collapse').contains(event.target);
    var isNavbarToggler = document.querySelector('.navbar-toggler').contains(event.target);

    if (!isClickInside && !isNavbarToggler) {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    }
});