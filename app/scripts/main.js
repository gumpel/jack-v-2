$('.field:not(#jform-1)').hide().css('opacity','0.1');

$('#jform-1 .jinput input').on('change keyup keydown keypress', function() {
    $(this).parent().siblings('div.jbutton').addClass('activate');
    console.log($(this).val());
});

$('#jform-1 .jbutton').on('click', function() {
	if ($('#jform-1 .jinput input').val() !=='') {
    $('#jform .jname').text($('#jform-1 .jinput input').val());
    $('#jform-1').css({'opacity':'0.1','margin-top':'-20vh'});
    $('#jform-1-1').show().css('opacity','1' );
    }
});

$('#jform-1-1 .jbutton').on('click', function(){
	$('#jform-1').hide();
	$('#jform-1-1').css({'opacity':'0.1','margin-top':'-20vh'});
	if ($('#jform-1-1 input:checked').val() === 'sites'){
		$('#sites').show();
		$('#jform-1-1').css({'opacity':'0.1','margin-top':'-30vh'});
		$('#jform-1-1-1-1').show().css('opacity','1' );
	}
	else if ($('#jform-1-1 input:checked').val() === 'position'){
		$('#position').show();
	}
	else if ($('#jform-1-1 input:checked').val() === 'diffrent'){
		$('#diffrent').show();
	}
})

$('.jinput-radio label').on('click', function() {
    $(this).siblings().prop('checked', true); 
    $('#jform-1-1 .jbutton').addClass('activate');   
})

$('.jinput-textarea textarea').on('input propertychange', function() {
    $(this).parent().siblings('.jbutton-centred').find('div.jbutton').addClass('activate');
});

$('#jform-1-1-1-2 .jinput input').on('change keyup keydown keypress', function() {
    $(this).parent().siblings('div.jbutton').addClass('activate')
   // console.log($(this).val());
});

