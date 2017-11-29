import * as angular from "angular";
import { movieData1, movieData2 } from "./data";
import { Review } from "./interfaces";

const app = angular.module("reviewApp", []);  // dependencies innanför []

// in the controller we can attach data to the scope, which can be accessed in the template, html.
app.controller("appController", function() {
  // $scope.message = "Hello from Angular!";
  this.movie1 = movieData1;
  this.movie2 = movieData2;
});

app.component("review", {
  bindings: {
    movie: "<",
  },
  controller: class ReviewComponent {
    public rating = 0;
    public movie: Review;
    public changeStarRating(newRating) {
      this.rating = newRating;
    }
  },
  controllerAs: "reviewCtrl",
  template: `
    <div class="main-container">
      <div>
          <img class="poster" ng-src="{{reviewCtrl.movie.imgUrl}}">
      </div>
      <div class="infosection">
          <h1>{{reviewCtrl.movie.title}}</h1>
          <div class="stars">
            <!-- the stars can be done with ng-repeat instead! :) -->
            <span
              ng-repeat="star in [1,2,3,4,5]"
              ng-class="{filled: reviewCtrl.rating >= star}"
              ng-click="reviewCtrl.changeStarRating(star)">&#9733;</span>
          </div>
          <p>{{reviewCtrl.movie.description}}</p>
          <p>{{reviewCtrl.movie.director}}</p>
          <p>{{reviewCtrl.movie.cast}}</p>
          <ul>
            <li ng-repeat="actor in reviewCtrl.movie.actors">{{actor}}</li>
          </ul>
      </div>
    </div>
  `
});
