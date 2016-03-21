$(document).ready(function()
{
	$('#message').focus();

	$("submit").click(function(){
		
	});
	
	$('#post-btn').click(function(){
		var nameText = $("#message").val();
		$("#wall").append("<div>" + "<img src='http://www.scass.ae/en/About1/PublishingImages/Pages/staff/nophoto.jpg'>" + nameText + "</div>");
	});
	// YOUR CODE GOES HERE
});