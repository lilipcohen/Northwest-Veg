const fetch = require("node-fetch");
const dotenv = require('dotenv').config()

module.exports = {

    allIngredients: async function (req, res) {
      const search = "";
        const queryURL = `https://api.edamam.com/search?q=${search}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&from=0&to=20&health=vegan&alcohol-free`; 
        
        const response = await fetch(queryURL);
        const result = await response.json();
        const sendListItems = {
            result: result.hits.ingredients
        }
        console.log(sendListItems);
        res.render("shoppinglist", sendListItems);
        
  }
};