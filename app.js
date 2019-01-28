$(document).ready(function () {

    // function for scrolling to bottom of page
    $("#contact-us").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            console.log(this.hash);
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });
});