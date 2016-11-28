$('.jinput').change(function(e) {
	$(this).siblings('div.jbutton').addClass('activate')
	console.log('ddd');
});
$('.jinput').on('change keyup keydown keypress',function(e) {
	$(this).siblings('div.jbutton').addClass('activate')
	console.log('ddd');
});