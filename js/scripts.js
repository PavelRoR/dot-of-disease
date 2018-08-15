$(document).ready(function () {
    /* Работа формы */
    $(function () {
        var check = $('.check', this),
            email = $('.mail', this),
            message = $('.alert_message', this);
        $(".form_newsletter").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert_message', this),
                reNone = /.+/,
                reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{1,20}$/,
                email = $('.mail', this),
                button = $('.button_mail', this);
            if (!email.val().match(reNone)) {
                email.css("border", "1px solid red");
                message.text('Введите email').slideDown(500);
                return false;
            } else if (!email.val().match(reEm)) {
                email.css("border", "1px solid red");
                message.text('Email введен некорректно').slideDown(500);
                return false;
            } else if (!check.prop("checked")) {
                check.next().css("color", "red");
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            } else {
                $('.infront', this).addClass('hide');
                $(".infront_submit", this).addClass("hide");
                $(".infront_submit", this).html("Зарегистрирован Ваш e-mail: " + email.val() + "<br>Бонус уже у Вас на почте").removeClass("hide");
                button.text('Отправлено');
            }
        });
        email.click(function () {
            email.css("border", "none");
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css("color", "#000");
            message.slideUp(500);
        });
    });

    /*Сертификаты*/
    $('#certs_carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["‹", "›"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            510: {
                items: 3
            },
            670: {
                items: 4
            },
            991: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    /*Видео-отзывы Жанны*/
    $('#jannas_videos, #alexs_videos').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["‹", "›"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            }
        }
    });
    /*Текстовые отзывы Жанны*/
    $('#jannas_texts, #alexs_texts').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["‹", "›"],
        dots: false,
        items: 1,
        autoHeight: true
    });
    /*Видео в отзывах*/
    $(".video_wrapper").click('.video_wrapper img', function () {
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>')
    });
    /*Страые браузеры*/
    var yaBrowserUpdater = new ya.browserUpdater.init({
        "lang": "ru",
        "browsers": {
            "yabrowser": "15.10",
            "chrome": "52",
            "ie": "10",
            "opera": "40",
            "safari": "8",
            "fx": "47",
            "iron": "35",
            "flock": "Infinity",
            "palemoon": "25",
            "camino": "Infinity",
            "maxthon": "4.5",
            "seamonkey": "2.3",
            "theme": "blue"
        }
    });
    /*Конец документа*/
});