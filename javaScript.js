$(document).ready(function(){
	var toggleCounter = 1;

	$(".image_block, img.option").on({
		'mouseenter': function()
		{
			$(this).css("background-color","yellow");
			$(this).css('cursor', 'pointer'); //not working
		},
		'mouseleave': function()
		{
			$(this).css("background-color", "lightgray");
		},


	});

	$(".button").on({
		'mouseenter': function()
		{
			$(this).css('cursor', 'pointer');
		}
	})

	

	$('#TQ2').hide();
	$('#TQ3').hide();
	$('#TQ4').hide();
	$('#TQ5').hide();
	$('#TQ6').hide();
	$('#TQ7').hide();
	$('#TQ8').hide();
	$('#TQ9').hide();
	$('#TQ10').hide();

	$(".button").on('click', function()
	{
		 var toggle = "TQ" + toggleCounter; //concatenating id string
		 var element = document.getElementById(toggle);

		element.style.display = 'none'; 

		toggleCounter++;
		toggle = "TQ" + toggleCounter;
		element = document.getElementById(toggle);

		element.style.display = ''; 

	});

	if (toggleCounter == 10) //display the result
	{

	}
	


});