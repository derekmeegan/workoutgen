const mainObj = {
armsChest : ["20 push ups", "15 shoulder push ups", "20 diamond push ups", "30 second plank", 
"1 minute push up position hold", "20 curls", "30 flyes", "30 second each side, side plank", "15 1.5 rep push ups", 
"20 wide push ups", "12 clap push ups", "12 dumbell lateral raises"],
legs : ["20 squats", "40 high knees", "50 calf raises", "20 lunges", "20 jump squats", "10 single leg squats each side",
"15 1.5 lunges each side", "20 jump switch lunges", "20 mountain jumpers", "15 1.5 pump squats", "5 minute bicycle"],
cardio : ["40 high knees", "20 burpees", "1 mile on treadmill", "20 jumping jack high knees", "20 tuck jumps",
 "45 second sprint/1 min walk", "50 mountain climbers", "1 min high knee in place", "1 min fast feet", "50 jumping jacks",
],
abs : ["20 crunches", "20 situps", "20 leg lifts", "20 V Ups", "20 side crunches", "45 second hollow body hold", 
"50 butterfly kicks", "50 scissors", "30 second side plank each side", "20 crab toe touches", "20 kickthroughs"],
twoExercises : function(arrIn) {
	let newArray = []
		while (newArray.length <2) {
		let num = Math.floor(Math.random()*arrIn.length);
			if (newArray.indexOf(arrIn[num])===-1) {
			newArray.push(arrIn[num]) 
			} 
		}
			return newArray
},
oneExercise: function(arrayIn) {
	let randNum = Math.floor(Math.random()*arrayIn.length)
	let exercise = arrayIn[randNum]
	return exercise

},
combineRandExercises: function(one, two, three, four) {
	$('#textDisplayed1').html(`<div id="randWorkout">${three} <br> ${one[1]} <br> 
	${two} <br> ${one[0]} <br> ${four}</div>`)
},
returnFiveExercises: function(arrIn) {
	let newArray = []
		while (newArray.length <5) {
		let num = Math.floor(Math.random()*arrIn.length);
			if (newArray.indexOf(arrIn[num])===-1) {
			newArray.push(arrIn[num]) 
			} 
		}
			return 	$('#textDisplayed2').html(`<div id="randWorkout">${newArray[0]} <br> ${newArray[1]} <br> 
	${newArray[2]} <br> ${newArray[3]} <br> ${newArray[4]}</div>`)
}
}
$('#btn_1').click(function(){
	let checkVar = Math.floor(Math.random()*4)
		switch(checkVar) {
			case 0 :
			mainObj.combineRandExercises(mainObj.twoExercises(mainObj.armsChest),mainObj.oneExercise(mainObj.legs),
		mainObj.oneExercise(mainObj.cardio),
		mainObj.oneExercise(mainObj.abs))
		break;
			case 1 :
			mainObj.combineRandExercises(mainObj.twoExercises(mainObj.cardio),mainObj.oneExercise(mainObj.legs),
		mainObj.oneExercise(mainObj.armsChest),
		mainObj.oneExercise(mainObj.abs))
		break;
			case 2 :
			mainObj.combineRandExercises(mainObj.twoExercises(mainObj.legs),mainObj.oneExercise(mainObj.armsChest),
		mainObj.oneExercise(mainObj.cardio),
		mainObj.oneExercise(mainObj.abs))
		break;
			default :
			mainObj.combineRandExercises(mainObj.twoExercises(mainObj.abs),mainObj.oneExercise(mainObj.legs),
		mainObj.oneExercise(mainObj.cardio),
		mainObj.oneExercise(mainObj.armsChest))
		break;
		}
	
		});
	$('#btn_2').click(function(){
	let thing = $('input[name=radio-choice-1]:checked', '#radioJawn').val()
			switch(thing) {
			case "armsChest" :
			mainObj.returnFiveExercises(mainObj.armsChest) 
			break;
			case "legs" :
			mainObj.returnFiveExercises(mainObj.legs) 
			break;
			case "cardio" :
			mainObj.returnFiveExercises(mainObj.cardio) 
			break;
			case "abs" :
			mainObj.returnFiveExercises(mainObj.abs) 
			break;
			default :
			$('#textDisplayed2').html("<h4>Please select a bodypart first :)</h4>")
			break;
			}
		})
	$('input[type=radio]').click(function(){
		if (this.previous) {
			this.checked = false;
		}
		this.previous = this.checked;
		});
