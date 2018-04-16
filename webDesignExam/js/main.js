function main() {
  $('.hideImage-button').on('click', function() {
    $('.img1').hide();
    $('.img2').hide();
    // $(this).next().slideToggle(400);
  });
  $('.showImage-button').on('click', function() {
    $('.img1').show();
    $('.img2').show();
    // $(this).next().slideToggle(400);
  })
}
