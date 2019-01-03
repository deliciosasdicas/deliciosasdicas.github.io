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
  $(".all").on('click', function(){
    $(".all").addClass('active');
    $("#lanches, #bebidas, #fitness, #sobremesa").removeClass('active');

    $(".post").show(100);
  });

  $("#lanches").on('click', function(){
    $("#lanches").addClass('active');
    $(".all, #bebidas, #fitness").removeClass('active');

    $(".lanches").show(100);
    $(".bebidas").hide(100);
    $(".fitness").hide(100);
    $(".sobremesa").hide(100);
  });

  $("#bebidas").on('click', function(){
    $("#bebidas").addClass('active');
    $(".all, #lanches, #fitness").removeClass('active');

    $(".bebidas").show(100);
    $(".lanches").hide(100);
    $(".fitness").hide(100);
    $(".sobremesa").hide(100);
  });

  $("#fitness").on('click', function(){
    $("#fitness").addClass('active');
    $(".all, #bebidas, #lanches").removeClass('active');

    $(".fitness").show(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sobremesa").hide(100);
  });

  $("#sobremesa").on('click', function(){
    $("#sobremesa").addClass('active');
    $(".all, #bebidas, #lanches, #fitness").removeClass('active');

    $(".sobremesa").show(100);
    $(".fitness").hide(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
  });

});
