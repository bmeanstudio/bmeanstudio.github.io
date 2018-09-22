(function ($) {
    $(function () {
        var MESSAGE_SUCCESS = '<span class="green-text">Ваша форма успешно отправлена!<br/> В ближайшее время наш менеджер свяжется с Вами.</span>';

        $('.sidenav').sidenav();

        $(window).on('load', function () {
            $(this).scrollTop(0);
            $("body").css("overflow-y", "hidden");
            $('.main-preloader-wrapper').delay(100).fadeOut();
            setTimeout(function () {
                $('.main-wrapper').css("opacity", "1");
                $('.parallax').parallax();
                $("body").css("overflow-y", "auto");
            }, 100);
        });

        $(".anchor-link").on("click", "a", function (event) {
            var heightHeader = 60;
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - heightHeader;
            $('body,html').animate({scrollTop: top}, 700);
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() >= 5) {
                $('nav').removeClass('not-shadow');
            } else {
                $('nav').addClass('not-shadow');
            }
        });

        $("#form-contact").submit(function (e) {
            e.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSeAWXt7Ezz1edoniLpJOGQSKEyEcMpPJ6ZwBavUQHcfcbKOvw/formResponse", // слать надо сюда, строку с буковками надо заменить на вашу, это атрибут action формы
                data: formData,
                type: "POST",
                dataType: "xml",
                beforeSend: function () {
                    $(this).find('button').attr('disabled');
                },
                statusCode: {
                    0: function () {
                        M.toast({html: MESSAGE_SUCCESS, classes: 'rounded'});

                        $('#name').val('');
                        $('#phone-number').val('');
                        $('#email').val('');
                        $('#company-name').val('');
                        $('#project-description').val('');
                    },
                    200: function () {
                        M.toast({html: MESSAGE_SUCCESS, classes: 'rounded'});

                        $('#name').val('');
                        $('#phone-number').val('');
                        $('#email').val('');
                        $('#company-name').val('');
                        $('#project-description').val('');
                    }
                }
            });
        });
    });
})(jQuery);
