(function ($) {
    $(function () {
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
                url: "https://docs.google.com/forms/d/e/1FAIpQLSdFyjokPUuQnsucvT-7LemVyXUsDDYG-rLAHVnalyGJXhVWVg/formResponse", // слать надо сюда, строку с буковками надо заменить на вашу, это атрибут action формы
                data: formData,
                type: "POST",
                dataType: "xml",
                beforeSend: function () {
                    $(this).find('button').attr('disabled');
                },
                statusCode: {
                    0: function () {
                        $(this).html('<h4>Спасибо!</h4><p>Форма отправлена блаблабла</p>');
                    },
                    200: function () {
                        $(this).html('<h4>Спасибо!</h4><p>Форма отправлена блаблабла</p>');
                    }
                }
            });
        });
    });
})(jQuery);
