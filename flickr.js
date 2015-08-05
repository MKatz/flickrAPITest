$(document).ready(function() {
  // When the search button is clicked, it triggers the API call
  $('#search').on('click', function(e) {
    // Clear thumbnails
    $('#photos').html('');
    
    // Prevents form from submitting - we don't need the form to submit
    e.preventDefault();

    // Retrieves the search term
    var searchValue = $('#search-input').val();
    var API_KEY = 'confidential';
    
    // AJAX call to Flickr API to get JSON data
    $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=confidential&tags=' + searchValue + '&tag_mode=all&place_id=yD64gcJTV7qtKYwu&radius=20&radius_units=mi&per_page=12&page=1&format=json&nojsoncallback=1',

      // 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=confidential&tags=' + searchValue + '&lat=36.1314&lon=95.9372&per_page=12&page=1&format=json&nojsoncallback=1',
      
      // 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&tags=' + searchValue + '&safe_search=2&per_page=12&format=json&nojsoncallback=1',
    
    function(data) {
      // Loops through each item and creates the url
      $.each(data.photos.photo, function(i, item) {
        var photoURL = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_' + 'q.jpg';
        // Adds the HTML for each thumbnail image
        var thumbnail = '<div class="col-xs-6 col-md-3"><img class="center-block img-thumbnail" src="' + photoURL + '" alt="Image 1"></div>'
        // Appends it to the page
        $('#photos').append(thumbnail);
      });
    });
  })
})