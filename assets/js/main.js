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

  $('.categories a').on('click', function (e) {
    e.preventDefault();
    var category = $(this).data('categoryType');
    $('.post').hide();
    $('.categories a').removeClass('active');
    $('.post[data-category-type="'+category+'"]').show(100);
    $('.categories a[data-category-type="'+category+'"]').addClass('active');
  });

  $('.categories a[data-category-type="./"]').on('click', function (e) {
    e.preventDefault();
    $('.post').show(100);
  });

});
