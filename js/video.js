var video = document.querySelector("#player1");
var buttonText = document.querySelector("#mute");
var slider = document.querySelector("#slider");
var volume = document.querySelector("#volume"); 

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log(video.currentTime)

	video.volume = document.querySelector("#volume").innerHTML = (video.volume*100) + "%";


 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	 });

document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Old Video speed is " + video.playbackRate);
	video.play()
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New Video speed is " + video.playbackRate);
		});

document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Old Video speed is " + video.playbackRate);
	video.play()
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New Video speed is " + video.playbackRate);
				});
		
document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 15 >= video.duration){
		video.load()
	}else{
		video.currentTime +=15;
		console.log("New time is " + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		video.muted = false;
		buttonText.innerHTML = "Mute";
		console.log("Muted")
	}else{
		video.muted=true;
		buttonText.innerHTML = "Unmute";
		console.log("Unmuuted")
	}

});

slider.oninput = function(){
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value/100
}

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
	console.log("OldSchool Video")


});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	console.log("Orginial Video")


});

		//skip ahead = 