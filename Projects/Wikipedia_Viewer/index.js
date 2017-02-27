$(document).ready(function() {
  
  function doSearch() {
    $(".list").html("");
    var search = $("#searchBox").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=12&format=json&callback=?";
    
    $.getJSON(url, function(data) {   
       if (data[1].length === 0) {
          $("#noResult").html("Find no result. Please try something else");
        }
       var content = '';
       for (var i = 0, len = data[1].length; i < len; i++) {
         content += "<li><a href=" + data[3][i] + " target='_blank'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>";
       }
       $("#result").append(content);      
    });
  }

  $("#searchBtn").on("click", doSearch);

  $("#searchBox").keypress(function(event) {
    if (event.keyCode === 13) {
      $("#searchBtn").trigger('click');
      event.preventDefault();
    }
  });
});




