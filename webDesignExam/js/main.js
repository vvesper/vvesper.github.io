function main() {
	$('.img1').showImage();
  $'.img2').showImage();
  $('hideImage-button').on('click', function() {
    $(this).toggleClass('hide');
    $(this).next().slideToggle(400);
  });
}
