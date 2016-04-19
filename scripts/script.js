(function (jQuery) {
    //Carousel
    var examplesCarousel = $('#examples-carousel');
    var examplesCarouselContainer = examplesCarousel.find(".carousel-inner");

    examplesCarousel.carousel({
        interval: false
    });

    function loadCarouselImages(i) {
        var img = $("<img/>");
        img.on({
            "load": function () {
                img.attr("alt", "Отделка балконов и лоджий");
                loadCarouselImages(i);
                addImageToCrousel(img);
            },
            "error": function () {
                examplesCarouselContainer.children().first().addClass("active");
            }
        });
        img.attr("src", "images/examples/photo" + i++ + ".jpg");
    }

    function addImageToCrousel(img) {
        $('<div class="item"></div>').append(img).appendTo(examplesCarouselContainer);
    }

    loadCarouselImages(1);


    //Navigation
    var navBarLi = $(".navbar-nav li");
    var topContainer = $(".top-container");
    var navbarCollapse = $('.navbar-collapse');

    $(".navbar-nav li a").each(function (i, anchor) {
        anchor = $(anchor);
        var name = anchor.attr("name");
        topContainer.bind(name, function (e) {
            navBarLi.each(function (i, li) {
                li = $(li);
                if (li.find('a').attr("name") == e.type) {
                    li.addClass("active");
                } else {
                    li.removeClass("active");
                }

            });
            navbarCollapse.collapse("hide");
        });
        anchor.click(function (e) {
            anchor.trigger(name);
        });
    });

    $("#top-carousel .item a").click(function (e) {
        var anchor = $(e.target);
        anchor.trigger(anchor.attr("name"));
    });

})(jQuery);