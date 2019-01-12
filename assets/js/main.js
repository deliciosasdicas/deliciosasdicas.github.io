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

  //menu mobile
  $(".btn-menu").on('click', function(){
    $(".categories").toggleClass('open');
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
    $("#lanches, #bebidas, #fitness, #sobremesas, #carnes, #sopas, #massas, #bolos-e-tortas").removeClass('active');

    $(".post").show(100);
  });

  $("#lanches").on('click', function(){
    $("#lanches").addClass('active');
    $(".all, #bebidas, #fitness, #sobremesas, #carnes, #sopas, #massas, #bolos-e-tortas").removeClass('active');

    $(".lanches").show(100);
    $(".bebidas").hide(100);
    $(".fitness").hide(100);
    $(".sobremesas").hide(100);
    $(".carnes").hide(100);
    $(".massas").hide(100);
    $(".bolos-e-tortas").hide(100);
  });

  $("#bebidas").on('click', function(){
    $("#bebidas").addClass('active');
    $(".all, #lanches, #fitness, #sobremesas, #carnes, #sopas, #massas, #bolos-e-tortas").removeClass('active');

    $(".bebidas").show(100);
    $(".lanches").hide(100);
    $(".fitness").hide(100);
    $(".sobremesas").hide(100);
    $(".carnes").hide(100);
    $(".massas").hide(100);
    $(".bolos-e-tortas").hide(100);
  });

  $("#fitness").on('click', function(){
    $("#fitness").addClass('active');
    $(".all, #bebidas, #lanches, #sobremesas, #carnes, #sopas, #massas, #bolos-e-tortas").removeClass('active');

    $(".fitness").show(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sobremesas").hide(100);
    $(".carnes").hide(100);
    $(".massas").hide(100);
    $(".bolos-e-tortas").hide(100);
  });

  $("#sobremesas").on('click', function(){
    $("#sobremesas").addClass('active');
    $(".all, #bebidas, #lanches, #fitness, #carnes, #sopas, #massas, #bolos-e-tortas").removeClass('active');

    $(".sobremesas").show(100);
    $(".fitness").hide(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sopas").hide(100);
    $(".carnes").hide(100);
    $(".massas").hide(100);
    $(".bolos-e-tortas").hide(100);
  });

  $("#carnes").on('click', function(){
    $("#carnes").addClass('active');
    $(".all, #bebidas, #lanches, #fitness, #sobremesas, #sopas, #massas, #bolos-e-tortas").removeClass('active');

    $(".carnes").show(100);
    $(".fitness").hide(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sobremesas").hide(100);
    $(".sopas").hide(100);
    $(".massas").hide(100);
    $(".bolos-e-tortas").hide(100);
  });

  $("#sopas").on('click', function(){
    $("#sopas").addClass('active');
    $(".all, #bebidas, #lanches, #fitness, #sobremesas, #carnes, #bolos-e-tortas, #massas").removeClass('active');

    $(".sopas").show(100);
    $(".fitness").hide(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sobremesas").hide(100);
    $(".carnes").hide(100);
    $(".massas").hide(100);
    $(".bolos-e-tortas").hide(100);
  });

  $("#massas").on('click', function(){
    $("#massas").addClass('active');
    $(".all, #bebidas, #lanches, #fitness, #sobremesas, #carnes, #sopas, #bolos-e-tortas").removeClass('active');

    $(".massas").show(100);
    $(".fitness").hide(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sobremesas").hide(100);
    $(".carnes").hide(100);
    $(".sopas").hide(100);
    $(".bolos-e-tortas").hide(100);
  });

  $("#bolos-e-tortas").on('click', function(){
    $("#bolos-e-tortas").addClass('active');
    $(".all, #bebidas, #lanches, #fitness, #sobremesas, #carnes, #sopas, #massas").removeClass('active');

    $(".bolos-e-tortas").show(100);
    $(".fitness").hide(100);
    $(".bebidas").hide(100);
    $(".lanches").hide(100);
    $(".sobremesas").hide(100);
    $(".carnes").hide(100);
    $(".sopas").hide(100);
    $(".massas").hide(100);
  });

});
