(function(){
	var mikeTimeout = setTimeout(function(){
		var mikeTrigger = document.getElementById('kb_bmike');
		console.log(mikeTrigger);
		mikeTrigger.addEventListener('click',function(){
			alert('Mike is on');
		},false);	
	},5000);

  var keyButtons = document.querySelectorAll()
SoundPlayer.play(SoundPlayer.sounds.defaultButton);
}());