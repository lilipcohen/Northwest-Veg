const express = require("express");

function allRecipes(req,res) {
   const queryURL =
    "https://api.edamam.com/search?q=all" +
    process.env.REACT_APP_GOOGLE_API_KEY;

   fetch({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response)
    res.render('recipes/recipes', {
      layout: 'main-recipes',
    });
  });
};

module.exports = allRecipes;
