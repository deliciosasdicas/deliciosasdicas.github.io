jQuery(document).ready(function($) {

  //instagram fixo
  var $topo = $('.title');
  var $instagram = $('#instagram');
  var $filterSpacer = $('<div />', {
          "class": "filter-drop-spacer",
          "height": $instagram.outerHeight()
  });

  $(window).scroll(function ()
  {
          if ($(window).scrollTop() > $topo.offset().top)
          {
                  $instagram.before($filterSpacer);
                  $instagram.addClass('fix');
          }
          else if ($instagram.hasClass('fix')  && $(window).scrollTop() < $filterSpacer.offset().top)
          {
                  $instagram.removeClass('fix');
                  $filterSpacer.remove();
          }

  });


  //tracking
  $("#instagram").on('click', function(){
    ga('send', 'event', 'Link', 'click', 'Clicou no Instagram');
  });

  //filtro
  var $menu = $('.doces, .salgados, .gelados');
  $(".all").on('click', function(){
    $(".all").addClass('active');
    $("#doces, #salgados, #gelados").removeClass('active');

    $(".post").show(100);
  });

  $("#doces").on('click', function(){
    $("#doces").addClass('active');
    $(".all, #salgados, #gelados").removeClass('active');

    $(".doces").show(100);
    $(".salgados").hide(100);
    $(".gelados").hide(100);
  });

  $("#salgados").on('click', function(){
    $("#salgados").addClass('active');
    $(".all, #doces, #gelados").removeClass('active');

    $(".salgados").show(100);
    $(".doces").hide(100);
    $(".gelados").hide(100);
  });

  $("#gelados").on('click', function(){
    $("#gelados").addClass('active');
    $(".all, #salgados, #doces").removeClass('active');

    $(".gelados").show(100);
    $(".salgados").hide(100);
    $(".doces").hide(100);
  });

});
