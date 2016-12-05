$('#jform-1 .jinput input').on('change keyup keydown keypress',function() {
	$(this).parent().siblings('div.jbutton').addClass('activate')
	console.log($(this).val());
});

$('#jform-1 .jbutton').on('click', function(){
	$('#jform .jname').text($('#jform-1 .jinput input').val());
	console.log($('#jform-1 .jinput input').val())
})