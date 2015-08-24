$(document).ready(function () {

	$('#videoContainer').hide();

	$('#submit').click(function (event) {
		event.preventDefault();
		if($('#search').val().length!=0){
			loadAjax();
			$('#thumbnail').empty();
			$('#prevList').append('<li>' + $('#search').val() + '</li>');
		} else {
			alert("Please enter something to search for");
		}
	}); 

	$('#back').click(function (){
		$('#videoContainer').hide();
		$('#thumbnail').show();
		$('#prevList').show();
		$('#previousSearch').show();
		$('#display').empty();
	});

	$('#thumbnail').on("click", ".videoThumbnail", function (index, value) {
		/* get the video id -- .attr(), create embed code, append to HTML video code hide thumbnail -- think line 36 */
		$('#videoContainer').show();
		$('#thumbnail').hide();
		$('#prevList').hide();
		$('#previousSearch').hide();
		var vidId = $(this).attr('id');
		var vidTitle = $(this).attr('title');
		console.log(vidTitle);
		$('#display').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + vidId + '" frameborder="0" allowfullscreen></iframe>');

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

			if(results.items.length>0) {
				$.each(results.items, function (index, value) {
					$('#thumbnail').append('<img class="videoThumbnail" id="'+ value.id.videoId +'" src="' + value.snippet.thumbnails.default.url + '"/>')
				});	
			}
					

		}).error(function (error) {
			console.log(error);
		});

	}
	
});