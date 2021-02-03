const fetch = require("node-fetch");
const dotenv = require('dotenv').config()

module.exports = {
  allRecipes: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=salad&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegetarian&health=vegan";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    
    res.render("recipelist", sendRecipes);
  }

};