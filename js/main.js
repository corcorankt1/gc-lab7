$(document).ready(function(){
	var $li = $("li");
	var $a = $("a");
	var $css = $("img.cs");
	var $bootstrap = $("img.btsp");
	var $jquery = $("img.jq");

	$li.mouseenter(function(){
	 	$(this).css("opacity", "0.25");
	});
	$li.mouseleave(function(){
	 	$(this).css("opacity", "1.00");
	});

	$a.on("click", function(){
		$(this).replaceWith("<a>Clicked!</a>");
	});

	$li.on("click", function (){
		$(this).addClass("selected");
	});

	$css.on("click", function() {
		$css.toggleClass("css");
	})

	$bootstrap.on("click", function() {
		$bootstrap.toggleClass("bootstrap");
	})

	$jquery.on("click", function() {
		$jquery.toggleClass("jquery");
	})


});

function yourLocation() {
	var locale = prompt("Where are you from?", "Detroit");

	if (locale != null)	{
		document.getElementById('location').innerHTML = locale + "? That's great! I hear it's nice there.";
	}
}

