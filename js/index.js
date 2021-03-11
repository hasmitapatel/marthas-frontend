$(document).ready(function() {
  var otherLinks = $('.desktop-links li').not('.dropbtn');
  var fadeLinks = $('.links li a').not(this);

  AOS.init({
    offset: 350,
    duration: 500,
  });

  $('.dropbtn').on('mouseover', function() {
    $('.popup').fadeIn();
  });

  $('.close').on('click', function(event) {
    event.preventDefault()
    $('.popup').fadeOut();
  });

  $('#search').on('click', function(event) {
    event.preventDefault();
    $('.popup-search').fadeToggle();
    $('body').toggleClass('noscroll');
    $('#project').val("");
  });


  $('#mobileSearch').on('click', function(event) {
    event.preventDefault();
    $('.mobile-search').toggleClass('show');
    $('#project').val("");

    if ($("body").hasClass("show-nav")) {
      $('body').removeClass('show-nav');
      $('.nav-icon').removeClass('active');
      $('.mobile-header').addClass('scroll');
    }
  });

  $(otherLinks).on('mouseover', function(event) {
    $('.popup').fadeOut();
    $('.popup-search').fadeOut();
    $('body').removeClass('noscroll');
  });

  $('.popup').mouseover(function() {
    $('.dropbtn a').addClass('active');
  });

  $('.modal-btn').click(function() {
    $('.modal-popup').toggleClass('show');
  });

  $('.close-modal').click(function() {
    $('.modal-popup').removeClass('show');
  });

  $('.desktop-nav li').mouseover(function() {
    $('.desktop-nav li .active').addClass('acd');
  });

  $('.desktop-nav li a').mouseout(function() {
    $('.desktop-nav li .active').removeClass('acd');
  });

  $('.links li a').on('mouseenter', function(event) {
    $(fadeLinks).css({
      'opacity': '.4',
      'transition': '.3s ease'
    });
    $(this).css('opacity', '1');
  });
  $('.links li a').on('mouseleave', function(event) {
    $('.links li a').css({
      'opacity': '1',
      'transition': '.3s ease'
    });
  });
  $('.close-form').on('click', function(event) {
    $('.popup').fadeOut();
    $('.popup-search').fadeOut();
    $('body').removeClass('noscroll');
    $('#project').val("");
  });
  $('.size-tabs span').on('click', function(event) {
    $('.size-tabs span').removeClass('active');
    $(this).addClass('active');
  });

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 1201) {
      $('.popup').hide();
    }
  });

});


$(document).ready(function() {

  $('.about > span').click(function() {
    $('[data-menu="about"]').fadeIn(350);
  });
  $('.services').click(function() {
    $('[data-menu="services"]').fadeIn(350);
  });
  $(".select > span").click(function() {
    $(this).parents('.mobile_body').fadeOut();
  });

  $(".sub-menu > li").click(function() {
    var activeMenu = $(this).attr("rel");
    $("#" + activeMenu).fadeIn();
  });

});


$(function() {
  $('.toggle-nav').click(function() {

    $('body').toggleClass('show-nav');

    if ($(".mobile-search").hasClass("show")) {
      $(".mobile-search").removeClass("show")
    }
    if ($("body").hasClass("show-nav")) {
      $('.nav-icon').addClass('active');
      $('.mobile-header').removeClass('scroll');
    } else {
      $('.nav-icon').removeClass('active');
      $('.mobile-header').addClass('scroll');
    }
  });

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() >= 1200) {
      $('body').removeClass('show-nav');
    }
  });

});

$(document).ready(function() {

  var menu_head = $('.menu-acc > li > a'),
      menu_body = $('.menu-acc li > .sub-menu, .last-sub-menu');

  menu_head.on('click', function() {

    if ($(this).attr('class') != 'active') {
      menu_body.slideUp('normal');
      $(this).next().stop(true, true).slideToggle('normal');
      menu_head.removeClass('active');
      $(this).addClass('active');
    } else {
      menu_body.slideUp('normal');
      menu_head.removeClass('active');
    }
  });


  $('.filter-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('.accordion-wrapper').slideToggle();
  });

  $('.product-item .favourite').on('click', function(event) {
    event.preventDefault();
    $(this).parents(".product-item").toggleClass('favouriteadded');
  });

  var accordion_head = $('.accordion > li > a'),
      accordion_body = $('.accordion li > .sub-menu, .last-sub-menu');

  accordion_head.on('click', function(event) {

    event.preventDefault();
    if ($(this).attr('class') != 'active') {
      accordion_body.slideUp('normal');
      $(this).next().stop(true, true).slideToggle('normal');
      accordion_head.removeClass('active');
      $(this).addClass('active');
    } else {
      accordion_body.slideUp('normal');
      accordion_head.removeClass('active');
    }
  });

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);

  });

});

$(function($){

  var $project = $('#project');
  var $homesearch = $('#homesearch');

  var projects = [
    {
      value: "product.html",
      label: "Lorem Ipsum 1",
      desc: "$28.00",
      icon: "swatch1.jpg"
    },
    {
      value: "product.html",
      label: "Lorem Ipsum 2",
      desc: "$32.00",
      icon: "swatch2.jpg"
    },
    {
      value: "product.html",
      label: "Lorem Ipsum 3",
      desc: "$40.00",
      icon: "swatch3.jpg"
    },
    {
      value: "product.html",
      label: "Lorem Ipsum 4",
      desc: "$28.00",
      icon: "swatch1.jpg"
    },
    {
      value: "product.html",
      label: "Lorem Ipsum 5",
      desc: "$32.00",
      icon: "swatch2.jpg"
    },
    {
      value: "product.html",
      label: "Lorem Ipsum 6",
      desc: "$40.00",
      icon: "swatch3.jpg"
    }
  ];

  $project.autocomplete({
    minLength: 0,
    source: projects,
    select: function( event, ui ) {
            window.location.href = ui.item.value;
    }
    // focus: function( event, ui ) {
    //   $project.val( ui.item.label );
    //   return false;
    // }
  });

  $homesearch.autocomplete({
    minLength: 0,
    source: projects,
    select: function( event, ui ) {
            window.location.href = ui.item.value;
    }
  });

  $project.data( "ui-autocomplete" )._renderItem = function( ul, item ) {

    var $li = $('<li>'),
        $img = $('<img>');


    $img.attr({
      src: 'images/' + item.icon,
      alt: item.label
    });

    $li.attr('data-value', item.label);
    $li.append('<a href="#">');
    $li.find('a').append($img).append( "<div>" + item.label + "<br>" + "<p>" + item.desc + "</p>"  + "</div>" );

    return $li.appendTo(ul);
  };

  $homesearch.data( "ui-autocomplete" )._renderItem = function( ul, item ) {

    var $li = $('<li>'),
        $img = $('<img>');


    $img.attr({
      src: 'images/' + item.icon,
      alt: item.label
    });

    $li.attr('data-value', item.label);
    $li.append('<a href="#">');
    $li.find('a').append($img).append( "<div>" + item.label + "<br>" + "<p>" + item.desc + "</p>"  + "</div>" );

    return $li.appendTo(ul);
  };


});



$('.collections').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
});


$('.product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.product-nav'
});

$('.product-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  asNavFor: '.product-slider',
  focusOnSelect: true
});
