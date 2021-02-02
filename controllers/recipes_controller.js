// const express = require("express");
const dotenv = require('dotenv').config()

module.exports = {
  allRecipes: function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=all&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY;

    fetch({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response)
      res.render("recipes");
    });
  }

};