$(document).ready(function() {
    $("#messageState").on("change", function() {
        $(".message").removeClass("openNor").removeClass("closeNor");
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
            $(".container").stop().animate({
                backgroundColor: "#FAACA8",
                backgroundImage: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)"
            }, 2000);
            console.log("Abrindo");$(document).ready(function() {
    var openStyle = {
        backgroundColor: "#FAACA8",
        backgroundImage: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)"
    };

    var closeStyle = {
        backgroundColor: "#8e165e",
        backgroundImage: "linear-gradient(194deg, #8e165e 0%, #5a1f82 33%, #0e4263 66%, #212342 100%)"
    };

    $("#messageState").on("change", function() {
        $(".message").removeClass("openNor").removeClass("closeNor");
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
            $(".container").stop().animate(openStyle, 2000);
            console.log("Abrindo");
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
            $(".container").stop().animate(closeStyle, 2000);
            console.log("fechando");
        }
    });

    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        console.log("Animation End");
        if ($(".message").hasClass("closeNor"))
            $(".message").addClass("closed");
        $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
    });

    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        console.log("Animation End");
        if (!$(".heart").hasClass("closeHer"))
            $(".heart").addClass("openedHer").addClass("beating");
        else
            $(".heart").addClass("no-anim").removeClass("beating");
        $(".heart").removeClass("openHer").removeClass("closeHer");
    });
});

        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
            $(".container").stop().animate({
                backgroundColor: "#8e165e",
                backgroundImage: "linear-gradient(194deg, #8e165e 0%, #5a1f82 33%, #0e4263 66%, #212342 100%)"
            }, 2000);
            console.log("fechando");
        }
    });
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});
