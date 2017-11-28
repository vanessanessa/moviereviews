let movieData = require("./data");
let $ = require("jquery");

function renderMovie(data){
    $(".infosection h1").text(data.movietitle);
    $(".infosection p").text(data.description);
    $(".poster").attr("src", data.img);
  
    $(".infosection ul").empty();
    for(let i=0; i<data.actors.length; i++){
      $(".infosection ul").append("<li>" + data.actors[i] + "</li>");
    }
  }
  
  function changeStarRating(rating){
    $(".filled").removeClass("filled");
    for(let i=1; i<=rating; i++){
      $("[data-rating-id=" + i + "]").addClass("filled");
    }
  }
  
  $(".stars").on("click", "span", function(e){
    let star = $(e.target);
    let rating = parseInt(star.attr("data-rating-id"));
    changeStarRating(rating);
  });
  

  renderMovie(movieData);