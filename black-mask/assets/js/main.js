VANTA.DOTS({
  el: ".topo",
  color: 0xffffff,
  color2: 0x222222
});

$(document).ready(function() {
  setInterval(function(){ $(".custom-social-proof").stop().slideToggle('slow'); }, 8000);
   $(".custom-close").click(function() {
     $(".custom-social-proof").stop().slideToggle('slow');
   });
});
