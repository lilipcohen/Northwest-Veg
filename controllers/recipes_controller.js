const express = require("express");
const API_SECRET = "&app_id=c2461807&app_key=39f37f3b09b422381fe3146b1138f4c6";

function allRecipes(inputRecipe) {
   const queryURL =
    "https://api.edamam.com/search?q=" +
    inputRecipe +
    API_SECRET;

   fetch({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
      console.log(response)
    // var recipeName = $("<h2>").text(response.name);
  });
};

module.exports = allRecipes;
