$('p a').attr('rel', 'group');
$('p a').addClass('fancybox');
$(document).ready(function () {
  $('a.fancybox').fancybox();
});
$.extend($.fancybox.defaults, {
  closeBtn: false,
  padding: 0
});