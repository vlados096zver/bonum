$(document).ready(function() {

new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
     scrollOverflow: true,
    slidesNavigation: true,
    controlArrows: false,
    navigation: true,
    slidesNavPosition: 'bottom',
  });

	if ($('#fp-nav').length>0 && $('.section').length<=1) {
		$('#fp-nav').hide();

	}
console.log($('.section'));
});
