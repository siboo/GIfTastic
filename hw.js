

var pictures = [];

function displayInfo() {

  var picture = $(this).attr("data-name");
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=IJYbRCoTRUFC2X41NwwXdbi9ws2JVUb7&limit=5");

  xhr.done(function(data) { $("#view").html(JSON.stringify(data));
   renderButtons(); });
}

// Function for displaying movie data
function renderButtons() {

  // Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#button-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < pictures.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("picture");
    // Adding a data-attribute
    a.attr("data-name", pictures[i]);
    // Providing the initial button text
    a.text(pictures[i]);
    // Adding the button to the buttons-view div
    $("#button-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-item").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var picture = $("#git-input").val().trim();

  // Adding the movie from the textbox to our array
  pictures.push(picture);
  console.log(pictures)

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Function for displaying the movie info
// Using $(document).on instead of $(".movie").on to add event listenersto dynamically generated elements
$(document).on("click", ".picture", displayInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
  