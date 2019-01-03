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
  $("#instagramRodape").on('click', function(){
    ga('send', 'event', 'Link', 'click', 'Clicou no Instagram do footer');
  });

  //filtro
  $(".all").on('click', function(){
    $(".all").addClass('active');
    $("#lanches, #bebidas, #fitness, #sobremesas").removeClass('active');

    $(".post").show(100);
  });

  $("#lanches").on('click', function(){
    $("#lanches").addClass('active');
    $(".all, #bebidas, #fitness, #sobremesas").removeClass('active');

    $(".lanches").show(100);
    $(".bebidas").hide(100);
    $(".fitness").hide(100);
    $(".sobremesas").hide(100);
  });

  $("#bebidas").on('click', function(){
    $("#bebidas").addClass('active');
    $(".all, #lanches, #fitness, #sobremesas").removeClass('active');

    $(".bebidas").show(100);
    $(".lanches").hide(100);
    $(".fitness").hide(100);
    $(".sobremesas").hide(100);
  });

  $("#fitness").on('click', function(){
    $("#fitness").addClass('active');
    $(".all, #bebidas, #lanches, #sobremesas").removeClass('active');

    $(".fitness").show(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sobremesas").hide(100);
  });

  $("#sobremesas").on('click', function(){
    $("#sobremesas").addClass('active');
    $(".all, #bebidas, #lanches, #fitness").removeClass('active');

    $(".sobremesas").show(100);
    $(".fitness").hide(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
  });

});
