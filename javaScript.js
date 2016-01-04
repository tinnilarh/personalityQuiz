$(document).ready(function()
{
	var toggleCounter = 1;

	$(".image_block, img.option").on({
		'mouseenter': function()
		{
			$(this).css("background-color","yellow");
			$(this).css('cursor', 'pointer'); 
		},
		'mouseleave': function()
		{
			$(this).css("background-color", "lightgray");
		},


	});

	$("#button, #submit").on({
		'mouseenter': function()
		{
			$(this).css('cursor', 'pointer');
		}
	})

/**** first question ****/
	$('#TQ2').hide();
	$('#TQ3').hide();
	$('#TQ4').hide();
	$('#TQ5').hide();
	$('#TQ6').hide();
	$('#TQ7').hide();
	$('#TQ8').hide();
	$('#TQ9').hide();
	$('#TQ10').hide();
	$('#submission').hide();

	
	

	var tech = 0;
	var sga = 0;
	var artsy = 0;
	var doc = 0;
	var business = 0;
	var nameCounter = 1; // counter to count odd numbered questions
	var name; // answer options have different name for each question
	var answers; // an array of all answer options of a question
	

	/*** next question ****/

	$("#button").on('click', function()
	{
		if (toggleCounter == 10) 
		// after answering all questions, display 
		// "are you ready for the result" page
		{
				$("#button").hide();
				$("#submission").show();
		}


		var toggle = "TQ" + toggleCounter; //concatenating id string
		var element = document.getElementById(toggle);

		element.style.display = 'none'; //hide previous question

		toggleCounter++;
		toggle = "TQ" + toggleCounter;
		element = document.getElementById(toggle); 

		element.style.display = ''; //show next question	

	});

	/**** after clicking "Let's see" button ****/
	/*** only calculating answers of odd numbered questions ***/
	
	$("#submit").on('click', function()
	{
		while (nameCounter <= 9)
		{
			name = "Q" + nameCounter;
			//construct the name

			answers = document.getElementsByName(name); 
			//get all options under the same name

			for (var j = 0; j < answers.length; j++)
			{
				if (answers[j].checked) // find the checked radio button 
				{
					switch (j)
					{
						case 0:
							tech++;
							break;
						case 1:
							sga++;
							break;
						case 2:
							artsy++;
							break;
						case 3:
							doc++;
							break;
						case 4:
							business++;
							break;
					}

				}
			}

			nameCounter += 2; //increment by 2 for odd number 

		}


	var maxNumber = Math.max(tech, sga, artsy, doc, business);
	// find the maximum number 

	// if all personality values are equal, the answer is 
	// always 'techy.'
	
	switch(maxNumber)
	{
		case tech:
			document.write("<body> <background image = url(images/fireworks.jpg) size= cover> </body>");
			document.write("<img src='images/techy.gif'>");
			document.write("<br> <h1> <font size = 25px color= skyblue>You are a Barnard techie! <font></body>");
			break;
		case sga:
			document.write("<img src='images/SGA.gif'>");
			document.write("<br> <h1> <font size = 25px color= skyblue>You are a Barnard SGA President! <font></body>");
			break;
		case artsy:
			document.write("<img src='images/artsy.gif'>");
			document.write("<br> <h1> <font size = 25px color= skyblue>You are a Barnard artist! <font></body>");
			break;
		case doc:
			document.write("<img src='images/doctor.gif'>");
			document.write("<br> <h1> <font size = 25px color= skyblue>You are a Barnard doctor! <font></body>");
			break;
		case business:
			document.write("<img src='images/business.gif'>");
			document.write("<br> <h1> <font size = 25px color= skyblue>You are a Barnard entrepreneur! <font></body>");
			break;
	}

});

	
});