(function(){
	var mikeTimeout = setTimeout(function(){
		var mikeTrigger = document.getElementById('kb_bmike');
		console.log(mikeTrigger);
		mikeTrigger.addEventListener('click',function(){
			alert('Mike is on');
		},false);	
	},5000);


}());