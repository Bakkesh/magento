$.noConflict();

jQuery(function() { (function ($) {

$("select").not(".product-view select, #checkoutSteps select, .multiselect, #region, #region_id, #country, #country_id").selectBox();

(function() {
    $('#slider').carouFredSel({
        prev: '.slidprev',
        next: '.slidnext',
        responsive: true,
        pagination: '#myController',
        scroll: 1,
	items: {
		visible: 1,
		width: 870,
		height: '46%'
	},
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#best_sellers .products-grid').carouFredSel({
	prev: '#prev_c1',
	next: '#next_c1',
        scroll: 1,
	auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#home-featured .products-grid').carouFredSel({
	prev: '#prev_c2',
	next: '#next_c2',
	scroll: 1,
	auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#list_banners').carouFredSel({
	prev: '#ban_prev',
	next: '#ban_next',
	scroll: 1,
	auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#product-upsell').carouFredSel({
	prev: '#prev_related',
	next: '#next_related',
	scroll: 1,
	auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#crosssell-products-list').carouFredSel({
	prev: '#crosssell-prev',
	next: '#crosssell-next',
	scroll: 1,
	auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $('#thumblist').carouFredSel({
	prev: '#img_prev',
	next: '#img_next',
	scroll: 1,
	auto: false,
        swipe: {
            onMouse: true,
            onTouch: true
	}
    });
    $(window).resize();
})();

$('.jqzoom').jqzoom({
    zoomType: is_touch_device() ? 'innerzoom' : 'standard',
    lens:true,
    preloadImages: true,
    alwaysOn:false
});

$("a[href$='#review-form']").click(function(){
    $("#product_tabs_reviews").addClass("active");
    $("#product_tabs_attributes").removeClass("active");
    $("#product_tabs_tags").removeClass("active");
    $("#product_tabs_description").removeClass("active");

    $("#product_tabs_reviews_contents").css("display", "block");
    $("#product_tabs_description_contents").css("display", "none");
    $("#product_tabs_attributes_contents").css("display", "none");
    $("#product_tabs_tags_contents").css("display", "none");
});


function show_reviews(){
    $("#product_tabs_reviews").addClass("active");
    $("#product_tabs_attributes").removeClass("active");
    $("#product_tabs_tags").removeClass("active");
    $("#product_tabs_description").removeClass("active");

    $("#product_tabs_reviews_contents").css("display", "block");
    $("#product_tabs_description_contents").css("display", "none");
    $("#product_tabs_attributes_contents").css("display", "none");
    $("#product_tabs_tags_contents").css("display", "none");
}

$("a[href$='#customer-reviews']").click(show_reviews);

//Primary menu(media < 984)
(function(){
    $('.primary .menu-select').toggle(function(){
        $('.primary > .nav-container').slideDown('slow');
        $(this).addClass('minus');
    }, function() {
        $('.primary > .nav-container').slideUp('slow');
        $(this).removeClass('minus');
    });

    $('.primary .parent > a').click(function (event) {
        if ($(window).width() <= 1007) {
            $(this).next('ul.level0').slideToggle('slow');
            $(this).parent('.parent').toggleClass('minus');
            return false;
        }
        else if (is_touch_device()) {
            var $submenu = $(this).next('ul.level0');

            $('.primary .parent > ul.level0').not($submenu[0]).slideUp('fast');

            if ($submenu.is(':visible')) {
                event.stopPropagation();
                return true;
            }
            else {
                $submenu.slideDown('slow');
                return false;
            }
        }
    });

    $("body").on('click', ':not(#nav a)', function () {
        $('.primary .parent > ul.level0').slideUp('fast');
    });
})();

$(".phone_top").click(function(){
    if ($(window).width() <= 410) {
        var show = $(".phone_top span").width() == 0;
        $(".phone_top span").animate({
            width: show ? "120px" : "0px",
            paddingLeft: show ? "5px" : "0px"
        }, 500);
        $(".valuta").animate({
            marginRight: show ? "-120px" : "0px"
        }, 500);
    }
});

$("#onepage-guest-register-button").appendTo("#checkout-step-login :first.col2-set .col-1");
$(".account-login .col2-set+.col2-set .new-users button").appendTo(".account-login :first.col2-set .new-users");

function is_touch_device() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

if (location.hash.replace(/^#/, '') == 'customer-reviews')
    show_reviews();

})(jQuery)});
