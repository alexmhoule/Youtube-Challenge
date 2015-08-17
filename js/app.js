$(document).ready(function () {

	$('#submit').click(function () {
		if($('#search-Term').val().length!=0){
			loadAjax();
		} else {
			alert("Please enter something to search for");
		}
	});  

	function loadAjax() {
	
		var data = {
			part: 'snippet',
			key: 'AIzaSyBg6j7YewqXfEbWEQxTW7CoAOh72QMkSTA',
			maxResults: 50,
			q: $('#search-Term').val()
		};

		$.ajax({
			url: "https://www.googleapis.com/youtube/v3/search",
			data: data
		}).done(function (results) {
			console.log(results); 

			/* Display YouTube - Hint check quiz app just like loading quiz data - */

			var playlist = response.results.items;

			if (playlist) {
				$.each(playlist, function(index, item) {
					displayResult(item.snippet);
				});
			}
			
		}).error(function (error) {
			console.log(error);
		});

	}
	
});