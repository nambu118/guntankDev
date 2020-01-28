(function(){
	if(!(window.Gamepad)) return;
	if(!(navigator.getGamepads)) return;
	var element = document.getElementById("controller");
	var lastCommand = {direction:0,launch:0};
		
	setInterval(function(){
		var str = "";
		var str2 = "";
		var command = {direction:0,launch:0};
		// direction:0 => 停止
		// direction:1 => 前進
		// direction:2 => 右旋回
		// direction:3 => 左旋回

		var gamepad_list = navigator.getGamepads();

		for(var i = 0; i < gamepad_list.length; i++){
			
			var gamepad = gamepad_list[i];
			if(!gamepad) continue;
			str += "connected: " + gamepad.connected + "\n";
			var buttons = gamepad.buttons;
			str += "buttons: {\n";

			for(var j = 0; j < buttons.length; j++){
				str += "  \"" + j + "\": { ";
				str += "pressed:" + buttons[j].pressed + "}\n";
			}
			str += "}\n";				

			if(buttons[6].pressed == true && buttons[7].pressed == true){
				command.direction=1
			}else if(buttons[6].pressed == false && buttons[7].pressed == true){
				command.direction=2
			}else if(buttons[6].pressed == true && buttons[7].pressed == false){
				command.direction=3
			}else if(buttons[4].pressed == true && buttons[5].pressed == true){
				command.direction=4
			}else if(buttons[6].pressed == true && buttons[7].pressed == true && buttons[0].pressed == true){
				command.direction=5
			}else if(buttons[3].pressed == true){
				command.direction=6
			}else if(buttons[2].pressed == true){
				command.direction=7
			}else{
				command.direction=0
			}

			if(buttons[1].pressed == true){
				command.launch=1;
			}else{
				command.launch=0;
			}

		}
		element.textContent = str;
		
		if(JSON.stringify(command) != JSON.stringify(lastCommand)){
				window.location.href = 'http://192.168.1.30:3000/'+command.direction + command.launch;
		}
		
		lastCommand=command;
		
	},50);
})();

