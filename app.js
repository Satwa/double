	var start;
	var now = 1;
	var timeout;
	var score = 0;

	console.log("Loading Javascript...");
	document.getElementById("win").innerHTML = score;
	console.log("Done!");

	function loop(){
		now = parseInt(document.getElementById("rand").value);

		document.getElementById("rand").value = now+1;
		console.log("[New Value] " + document.getElementById("rand").value);
	}

	//New number generation
	function newNumber(){
		number = Math.floor((Math.random() * 30) + 1);

		console.log("Number: "+number);

		now = 1;
		start = number;

		document.getElementById("rand").value = 1;
		document.getElementById("res").value = "";
		

		document.getElementById("text").innerHTML = "You have to make the double of : <b style='font-size:24px'>"+number+"</b>";
	}


	//The Game Main Function
	function startop(){
		if(document.getElementById("startop").value == "Start"){
			//

			//Starting Game
			newNumber();
			//Starting loop
			loop();
			
////////////////////////////////////////////////
/*****++++*/timeout = setInterval(loop, 200);//
//////////////////////////////////////////////
			
			document.getElementById("startop").value = "Stop";
			//
		}else if(document.getElementById("startop").value == "Stop"){
			//
			
//////////////////////////////////////
/*****++++*/clearInterval(timeout);//
////////////////////////////////////
			
			if(now+1 == 2 * start){
				document.getElementById("res").value = "You won :3";
				score++;
				document.getElementById("win").innerHTML = score;
			}else{
				document.getElementById("res").value = "You loose :(";
			}
			document.getElementById("startop").value = "Start";
			//
		}
	}