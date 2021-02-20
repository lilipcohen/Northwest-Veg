const fetch = require("node-fetch");
const dotenv = require('dotenv').config() 

async function fetchRecipes(categoryquery) {
  const queryURL =
    "https://api.edamam.com/search?q=&app_id=" +
    process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegan" + categoryquery;
  console.log(queryURL);
  const response = await fetch(queryURL)

  const result = await response.json();
  console.log(result);
  const sendRecipes = {
    result: result.hits
  }
  return sendRecipes;
}

module.exports = {
  allRecipes: async function (req, res) {
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegan&alcohol-free" + categoryquery;

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }

    res.render("recipelist", sendRecipes);
  },

  // users search for recipe
  searchRecipe: async function (req, res) {

    const keyword = req.params.keyword
    const queryURL =
      "https://api.edamam.com/search?q=&app_id=" +
      process.env.API_ID + "&app_key=" + process.env.API_KEY + "&from=0&to=10&health=vegan&alcohol-free";

    const response = await fetch(queryURL)
    const result = await response.json();
    const sendRecipes = {
      result: result.hits
    }
    res.json(result.hits);
  },
  
  allBreakfast: async function (req, res) {

    res.render("recipelist", await fetchRecipes("&mealType=Breakfast"));
  },
  allLunchDin: async function (req, res) {

    res.render("recipelist", await fetchRecipes("&mealType=Lunch&mealType=Dinner"));
  },
  allDesserts: async function (req, res) {

    res.render("recipelist", await fetchRecipes("&dishType=Desserts"));
  },
  allSnacks: async function (req, res) {

    res.render("recipelist", await fetchRecipes("&mealType=Snack"));
  },
  allGluten: async function (req, res) {

    res.render("recipelist", await fetchRecipes("&health=gluten-free"));
  },
  allAllergen: async function (req, res) {

    res.render("recipelist", await fetchRecipes("&health=peanut-free&health=tree-nut-free"));
  }



};