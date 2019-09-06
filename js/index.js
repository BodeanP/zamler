$('document').ready(function () {
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

    $('.category__head').on('click', function () {
        $(this).parent().find('.category-list__subcategory').slideToggle();
    })
})