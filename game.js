
    $(document).ready(function() {

    	var random = Math.floor(Math.random()*101+19)

    	$('#number').text(random);




    var number1 = Math.floor(Math.random()*11+1)
    var number2 = Math.floor(Math.random()*11+1)
    var number3 = Math.floor(Math.random()*11+1)
    var number4 = Math.floor(Math.random()*11+1)

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#score').append(playerTotal);
    $('#wins').append(wins);
    $('#losses').append(losses);


    // function reset() {
    // 	random = Math.floor(Math.random()*101+19)
    // 	$('number').text(random);
    // 	number1 = Math.floor(Math.random()*11+1);
    // 	number2 = Math.floor(Math.random()*11+1);
    // 	number3 = Math.floor(Math.random()*11+1);
    // 	number4 = Math.floor(Math.random()*11+1);
    // 	playerTotal = 0;
    // 	$('#score').append(playerTotal)
    // }

    function winner() {
    	alert("You won!");
    	wins++;
    	$('#wins').text("Wins: " + wins);
    	reset();
    }

    function loser() {
    	alert("You lost...");
    	losses++;
    	$('#losses').text("Losses: " + losses);
    	reset();
    }

    function reset() {
        random = Math.floor(Math.random()*101+19)
        $('#number').text(random);
        $('.gem').each(function(){
        $(this).attr("data-value", Math.floor(Math.random()*11+1));
    });
        playerTotal = 0;
        $("#score").text(playerTotal);

    }

    $('.gem').each(function(){
    	$(this).attr("data-value", Math.floor(Math.random()*11+1));
    });

    $('.gem').on('click', function(){


    var value =	$(this).attr("data-value");
    value = parseInt(value);
    // console.log(value);
    // console.log(typeof value);
    playerTotal = playerTotal + value;
    
    $('#score').text("Your total score is: " + playerTotal);
	

        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }


    // playerTotal = playerTotal + number1;
	// $('#totalScore').text(playerTotal);
	// if (playerTotal == random) {
	// 	winner();
	// }
	// else if (playerTotal > random) {

	// 	loser();
	// }

    })


    });

