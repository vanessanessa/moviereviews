import * as angular from "angular";
import { movieData } from "./data";
import { Review } from "./interfaces";
const app = angular.module("reviewApp", []);  // dependencies innanför []
// in the controller we can attach data to the scope, which can be accessed in the template, html.
app.controller("reviewController", ($scope) => {
// $scope.message = "Hello from Angular!";
  $scope.movie = movieData; // from data.ts
  $scope.list = ["Uma Thurman", "David Carradine", "Shin'ichi Chiba"];
  $scope.rating = 0;
  $scope.changeStarRating = (newRating) => {
    $scope.rating = newRating;
  };
});
/*
jQuery
import * as $ from "jquery";
import { movieData } from "./data";
import { Review } from "./interfaces";

function renderMovie(data: Review) {
  {
    $(".infosection h1").text(data.movietitle);
    $(".infosection p").text(data.description);
    $(".infosection p:nth-of-type(2)").text(data.director);
    $(".infosection p:nth-of-type(3)").text(data.cast);
    $(".poster").attr("src", data.img);
    $(".infosection ul").empty();
    for (let i = 0; i < data.actors.length; i++) {
      $(".infosection ul").append("<li>" + data.actors[i] + "</li>");
    }
  }
}
let rating;

function mouseEnter(hover) {
  $(".filled").removeClass("filled");
  for (let i = 0; i <= hover; i++) {
    $("[data-rating-id=" + i + "]").addClass("filled");
  }
}
$(".stars").on("mouseenter", "span", (e) => {
  const star = $(e.target);
  const hover = parseInt(star.attr("data-rating-id"));
  mouseEnter(hover);
});

function changeStarRating(ratings) {
  $(".filled").removeClass("filled");
  for (let i = 0; i <= rating; i++) {
    $("[data-rating-id=" + i + "]").addClass("filled");
  }
}

$(".stars").on("click", "span", (e) => {
  const star = $(e.target);
  rating = parseInt(star.attr("data-rating-id"));
  changeStarRating(rating);
});

renderMovie(movieData);

/*
JavaScript
function renderMovie(data){
  document.querySelector(".infosection h1").textContent = data.movietitle;
  document.querySelector(".infosection p").textContent = data.description;
  document.querySelector(".infosection p:nth-of-type(2)").textContent = data.director;
  document.querySelector(".infosection p:nth-of-type(3)").textContent = data.cast;
  document.querySelector(".poster").setAttribute("src", data.img);

  let actorList = "";
  for(let i=0; i<data.actors.length; i++){
    actorList += "<li>" + data.actors[i] + "</li>";
  }
  document.querySelector(".infosection ul").innerHTML = actorList;
}

function changeStarRating(rating){
  for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    if (i <= rating){
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  }
}

for(let i=1; i<=5; i++){
  let star = document.getElementById("star" + i);
  star.addEventListener("click", function(){
    changeStarRating(i);
  });
}

function mouseOver(rating){
  for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    if(i <= rating){
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  }
}

for(let i=1; i<=5; i++){
  let star = document.getElementById("star" + i);
  star.addEventListener("mouseover", function(){
    mouseOver(i);
  });
}

/*function mouseOut(hover){
  for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    if(i <= hover){
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  }
}*/

/*for(let i=1; i<=5; i++){
  let star = document.getElementById("star" + i);
  star.addEventListener("mouseout", function(){
    mouseOut(i);
  });
}*/
