// const express = require("express");
const fetch = require("node-fetch");
const dotenv = require('dotenv').config()

module.exports = {
  allRecipes: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=chicken&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY;

    const response = await fetch(queryURL)
      const result = await response.json();
    res.json(result);
    }

};