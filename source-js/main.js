$('#navbar-button').on('click', function() {
    if ($('#navbar-top').hasClass('display-off')) {
            $('#navbar-top').removeClass('display-off')
    } else {
    setTimeout(function () {
        $('#navbar-top').addClass('display-off')
    }, 500)
    }
    setTimeout(function () {
    $('#navbar-top').toggleClass('active');
    }, 1)
});
