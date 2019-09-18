var initRangeInput = function () {
    var slider = document.getElementById('range');

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        tooltips: [true, true],
        range: {
            'min': 0,
            'max': 100
        }
    });

    var from = $("#price_from");
    var to = $("#price_to");

    slider.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];


        if (handle == 0) {
            from.val(value);
        } else {
            to.val(value);
        }



    });

    from.on('change', function () {
        slider.noUiSlider.set([this.value, null]);
    });

    to.on('change', function () {
        slider.noUiSlider.set([null, this.value]);
    })
}

$('document').ready(function () {
    if($('#range').length > 0){
        initRangeInput();
    }

    $('.orders-accordion__tab').on('click', function(){
        $(this).parent().find('.orders-accordion__content').slideToggle();
        $(this).toggleClass('active');
    })

    $('.category__head').on('click', function () {
        $(this).parent().find('.category-list__subcategory').slideToggle();
    })

    $('.mobile-menu__item a').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().toggleClass('opened')
    })

    $('.menu-toggle').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.mobile-menu').toggleClass('opened');
    })

    $('.menu-back').on('click', function(){
        $('.mobile-menu__item').removeClass('opened');
    })
})

