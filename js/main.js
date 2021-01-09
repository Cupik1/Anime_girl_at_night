// Нажатие на кнопку zero two
$( ".Osnova").click( function() { 
	$( ".card1").css({ "opacity": "1" });
	$( ".card2").css({ "opacity": "0" });
	$( ".card3").css({ "opacity": "0" });
	$( ".card4").css({ "opacity": "0" });
	$( ".card5").css({ "opacity": "0" });
});
$( ".ZeroTwo").click( function() { 
	$( ".card1").css({ "opacity": "0" });
	$( ".card2").css({ "opacity": "1" });
	$( ".card3").css({ "opacity": "0" });
	$( ".card4").css({ "opacity": "0" });
	$( ".card5").css({ "opacity": "0" });
});
$( ".Emilia").click( function() { 
	$( ".card1").css({ "opacity": "0" });
	$( ".card2").css({ "opacity": "0" });
	$( ".card3").css({ "opacity": "1" });
	$( ".card4").css({ "opacity": "0" });
	$( ".card5").css({ "opacity": "0" });
});
$( ".Lusy").click( function() { 
	$( ".card1").css({ "opacity": "0" });
	$( ".card2").css({ "opacity": "0" });
	$( ".card3").css({ "opacity": "0" });
	$( ".card4").css({ "opacity": "1" });
	$( ".card5").css({ "opacity": "0" });
});
$( ".Rias").click( function() { 
	$( ".card1").css({ "opacity": "0" });
	$( ".card2").css({ "opacity": "0" });
	$( ".card3").css({ "opacity": "0" });
	$( ".card4").css({ "opacity": "0" });
	$( ".card5").css({ "opacity": "1" });
});