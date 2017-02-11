$(document).ready(function () {
    //script for dropdown
    $('#navbar-button').on('click', function () {
        if ($('#navbar-top').hasClass('display-off')) {
            $('#navbar-top').removeClass('display-off')
        } else {
            setTimeout(function () {
                $('#navbar-top').addClass('display-off')
            }, 500)
        }
        setTimeout(function () {
            $('#navbar-top').toggleClass('display-on');
        }, 1)
    });
    //script for accordion
    $('.accordion>h3').on('click', function () {
        $('.accordion>h3').removeClass('active');
        $('.accordion>div').removeClass('active');
        $('#head-1').on('click', function () {
            $('#head-1').addClass('active');
            $('#block-1').addClass('active');
        });
        $('#head-2').on('click', function () {
            $('#head-2').addClass('active');
            $('#block-2').addClass('active');
        });
        $('#head-3').on('click', function () {
            $('#head-3').addClass('active');
            $('#block-3').addClass('active');
        });
        $('#head-4').on('click', function () {
            $('#head-4').addClass('active');
            $('#block-4').addClass('active');
        });
    });
    //script for modal
    $('#open-modal').on('click', function () {
        $('.dialog').addClass('visible');
        $('#overlay').addClass('visible');
    });
    $('#close-modal').on('click', function () {
        $('.dialog').removeClass('visible');
        $('#overlay').removeClass('visible');
    });
    //script fot tabs
    $('#tab-head-1').on('click', function () {
        $('#tabs ul li').removeClass('active');
        $('div#tabs>div').removeClass('active');
        $('#tab-head-1').addClass('active');
        $('#tabs-1').addClass('active')
    });
    $('li#tab-head-2').on('click', function () {
        $('#tabs ul li').removeClass('active');
        $('div#tabs>div').removeClass('active');
        $('#tab-head-2').addClass('active');
        $('#tabs-2').addClass('active')
    });
    $('li#tab-head-3').on('click', function () {
        $('#tabs ul li').removeClass('active');
        $('div#tabs>div').removeClass('active');
        $('#tab-head-3').addClass('active');
        $('#tabs-3').addClass('active')
    })
});
