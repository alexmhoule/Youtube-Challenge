$(document).ready(function () {

	function video (videoId, thumbnails, title) {
		this.videoId = videoId;
		this.thumbnails = thumbnails;
		this.title = title;
	}

	$('#submit').click(function (event) {
		event.preventDefault();
		if($('#search').val().length!=0){
			loadAjax();
			console.log($('#search').val());
		} else {
			alert("Please enter something to search for");
		}
	});  

	function loadAjax() {
	
		var data = {
			part: 'snippet',
			key: 'AIzaSyBg6j7YewqXfEbWEQxTW7CoAOh72QMkSTA',
			maxResults: 50,
			q: $('#search').val()
		};

		$.ajax({
			url: "https://www.googleapis.com/youtube/v3/search",
			data: data
		}).done(function (results) {
			console.log(results); 

			/* Display YouTube - Hint check quiz app just like loading quiz data - */

			function loadVideos () {
				$('#videoContainer').attr('src', videoId);
				$('#videoContainer').attr('src', thumbnails);
				$('#videoContainer').text('src', title);
			}		

		}).error(function (error) {
			console.log(error);
		});

	}
	
});