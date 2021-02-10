const fetch = require("node-fetch");
const dotenv = require('dotenv').config()

module.exports = {
  allRecipes: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegan";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    
    res.render("recipelist", sendRecipes);
  },
    allBreakfast: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegan&mealType=breakfast";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    
    res.render("recipelist", sendRecipes);
  },
    allLunchDin: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegetarian&mealType=lunch&mealType=dinner";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    
    res.render("recipelist", sendRecipes);
  },
    allDesert: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegetarian&dishType=desert";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    
    res.render("recipelist", sendRecipes);
  },
    allGluten: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegetarian&health=gluten-free";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    
    res.render("recipelist", sendRecipes);
  },
    allAllergen: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegetarian&health=peanut-free&health=tree-nut-free";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    console.log(result);
    res.render("recipelist", sendRecipes);
  }

};