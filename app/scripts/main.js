var formObj = {
    "jform-1": '<form class="jform text-left" id="jform">< div class = "field" id = "jform-1" ><div class = "jlabel" > Cześć, nazywam się Robert i witam Cię na mojej stronie internetowej.Jak masz na Imię ? </div> < div class = "jinput" >< input type = "text" name = "name" id = "jname" / >< /div> < div class = "jbutton" > < span > Zatwierdź < /span></div >< /div>'
}




$('.field:not(#jform-1)').hide().css('opacity', '0.1');
var current = $('#jform-1'),
    next = $('#jform-1-1'),
    prev = $('');

$(document).ready(function() {
    $('#jname').focus();
})


$('#jform-1 .jinput input').on('change keyup keydown keypress', function() {
    $(this).parent().siblings('div.jbutton').addClass('activate');
});



function displayNext(cur, ne, pre) {
    cur.css({ 'opacity': '0.1', 'margin-top': '-20vh' }).addClass('prev');
    ne.show().css({ 'opacity': '1' });
    pre.hide();
}

function hidePrev(e) {
    e.css({ 'opacity': '0.1', 'margin-top': '-20vh' }).addClass('prev');
}

function showNext(e) {
    e.show().css({ 'opacity': '1' });
}

prev.on('click', function() {
    prev.css({ 'margin-top': 0 });
    showNext(prev);
    current.hide();
    next = current;
    current = prev;
})


$('#jform-1 .jbutton').on('click', function() {
    console.log('nexts');
    if ($('#jform-1 .jinput input').val() !== '') {
        $('#jform .jname').text($('#jform-1 .jinput input').val());
        hidePrev(current);
        showNext(next);
        prev = current;
        current = next;
    }
});

$('#jform-1-1 .jbutton').on('click', function() {
    $('#jform-1').hide();
    $('#jform-1-1').css({ 'opacity': '0.1', 'margin-top': '-20vh' });
    if ($('#jform-1-1 input:checked').val() === 'sites') {
        $('#sites').show();
        next = $('#jform-1-1-1-1');
        displayNext(current, next, prev);
        prev = current;
        current = next;
    } else if ($('#jform-1-1 input:checked').val() === 'position') {
        $('#position').show();
        next = $('#jform-1-1-2-1');
        displayNext(current, next, prev);
        prev = current;
        current = next;
    } else if ($('#jform-1-1 input:checked').val() === 'diffrent') {
        $('#diffrent').show();
        $('#jform-1-1').css({ 'opacity': '0.1', 'margin-top': '-30vh' });
        $('#jform-1-1-2-2-1').show().css('opacity', '1');
        next = $('#jform-1-1-2-2-1');
        displayNext(current, next, prev);
        prev = current;
        current = next;
    }
});
// Czy pozycjonowanie dotyczy istniejącej strony?
$('#jform-1-1-2-1 .jinput-radio').on('click', function() {
    if ($(this).val === 'tak') {
        next = $('#jform-1-1-2-1-2');
    } else {
        next = $('#jform-1-1-2-2-1');
    }
    displayNext(current, next, prev);
    prev = current;
    current = next;
});
//>Podaj adres strony \ domeny:
$('#jform-1-1-2-1-1 .jbutton').on('click', function() {
    next = $('#jform-1-1-2-1-2');
    displayNext(current, next, prev);
    prev = current;
    current = next;
});

//Czy masz słowa kluczowe na jakie chcesz pozycjonować lub liki stron Twojej konkurencji? 
$('#jform-1-1-2-1-2 .jinput-radio').on('click', function() {
    if ($(this).val === 'tak') {
        next = $('#jform-1-1-2-1-2-1');
    } else {
        next = $('#jform-1-1-2-1-2-2');
    }
    displayNext(current, next, prev);
    prev = current;
    current = next;
});
// Wymień je proszę: 
$('#jform-1-1-2-1-2-1 .jbutton').on('click', function() {
    next = $('#jform-1-1-2-1-2-1-2');
    displayNext(current, next, prev);
    prev = current;
    current = next;
});

// podaj telefont

$('#jform-1-1-2-1-2-1-2 .jbutton, #jform-1-1-2-1-2-2 .jbutton').on('click', function() {
    next = $('#jform-end');
    displayNext(current, next, prev);
    prev = current;
    current = next;
})

//Pomocne dla mnie będzie gdy opiszesz mi troszkę swój pomysł. Możesz także załączyć plik, z chęcią się z nim zapoznam.
$('#jform-1-1-1-1 .jbutton').on('click', function() {
        // $('#jform-1-1').hide();
        // $('#jform-1-1-1-1').css({ 'opacity': '0.1', 'margin-top': '-30vh' });
        // $('#jform-1-1-1-2').show().css('opacity', '1');
        next = $('#jform-1-1-1-2');
        displayNext(current, next, prev);
        prev = current;
        current = next;
    })
    //Zostaw mi do siebie telefon lub e-mail, gdy tylko przeanalizuję Twój pomysł, odezwę się do Ciebie sdsd!
$('#jform-1-1-1-2 .jbutton').on('click', function() {
    // $('#jform-1-1-1-1').hide();
    // $('#jform-1-1-1-2').css({ 'opacity': '0.1', 'margin-top': '-30vh' }).delay(300).hide();
    // $('#jform-end').show().css('opacity', '1');
    next = $('#jform-end');
    displayNext(current, next, prev);
    prev = current;
    current = next;
})


$('.jinput-radio label').on('click', function() {
    $(this).siblings().prop('checked', true);
    $('#jform-1-1 .jbutton').addClass('activate');
})

$('.jinput-textarea textarea').on('input propertychange', function() {
    $(this).attr('placeholder', '');
    $(this).parent().siblings('.jbutton-centred').find('div.jbutton').addClass('activate');
});

$('#jform-1-1-1-2 .jinput input').on('change keyup keydown keypress', function() {
    $(this).parent().siblings('div.jbutton').addClass('activate')

});
