const fetch = require("node-fetch");
const dotenv = require("dotenv").config();

async function fetchRecipes(categoryquery) {
  const queryURL =
    "https://api.edamam.com/search?q=&app_id=" +
    process.env.API_ID +
    "&app_key=" +
    process.env.API_KEY +
    "&from=0&to=10&health=vegan" +
    categoryquery;
  const response = await fetch(queryURL);

  const result = await response.json();
  return result.hits;
}

module.exports = {
  // users search for recipe
  searchRecipe: async function (req, res) {
    const keyword = req.params.keyword;
    const queryURL =
      "https://api.edamam.com/search?q=" +
      keyword +
      "&app_id=" +
      process.env.API_ID +
      "&app_key=" +
      process.env.API_KEY +
      "&from=0&to=10&health=vegan";

    const response = await fetch(queryURL);
    const result = await response.json();
    const sendRecipes = {
      result: result.hits,
    };
    res.json(result.hits);
  },

  allBreakfast: async function (req, res) {
    res.json(await fetchRecipes("&mealType=Breakfast&health=alcohol-free"));
  },
  allLunchDin: async function (req, res) {
    res.json(
      await fetchRecipes("&mealType=Lunch&mealType=Dinner&health=alcohol-free")
    );
  },
  allDesserts: async function (req, res) {
    res.json(await fetchRecipes("&dishType=Desserts&health=alcohol-free"));
  },
  allSnacks: async function (req, res) {
    res.json(await fetchRecipes("&mealType=Snack&health=alcohol-free"));
  },
  allGluten: async function (req, res) {
    res.json(await fetchRecipes("&health=gluten-free&health=alcohol-free"));
  },
  allAllergen: async function (req, res) {
    res.json(
      await fetchRecipes(
        "&health=peanut-free&health=tree-nut-free&health=alcohol-free"
      )
    );
  },
};
