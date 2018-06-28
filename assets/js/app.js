var search;
var images = [];
$('#addSearch').on('click', function(e){
    e.preventDefault();   
    search = $('#searchInput').val().trim();
    console.log("Search = " + search);
    // write it to dom
    $('#searchResults').prepend(search);
    images.push(search);
    renderButtons();
});
// Function for displaying image data
function renderButtons() {
$("#searchResults").empty();

// Looping through the array of images
for (var i = 0; i < images.length; i++) {
    // Then dynamicaly generating buttons for each image in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of image-btn to our button
    a.addClass("btnSearch");
    // Adding a data-attribute
    a.attr("data-name", images[i]);
    // Providing the initial button text
    a.text(images[i]);
    // Adding the button to the buttons-view div
    $("#searchResults").append(a);
}
}
function renderGif() {
    search = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=NNm6OtMHIWdnjhvwLvUdSRxBAB4Ph95M&tag=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // $('#btnSearch').on('click', function(){
        //     $("#searchResults").prepend(image);   
        var imgURL = response.Poster;
            var image = $("#searchResults").attr("src", imgURL);

            // Appending the image
            movieDiv.append(image);
  
            // Putting the entire movie above the previous movies
            $("#movies-view").prepend(movieDiv);
          });
    });
    
}
   
//     // After the data from the AJAX request comes back
//     .then(function(response) {

//         // Saving the image_original_url property
//             var imageUrl = response.data.image_original_url;

//             // Creating and storing an image tag
//             var giphy = $("#searchResults");

//             // Setting the catImage src attribute to imageUrl
//             catImage.attr("src", imageUrl);
//             catImage.attr("alt", search + "image");

//             // Prepending the catImage to the images div
//             $("#images").prepend(catImage);
//         });

