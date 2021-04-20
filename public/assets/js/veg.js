// const { response } = require("express");

// Breakfast
function getBreakfast() {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/recipe/allrecipes",
  //   data: allBreakfast
  // })
  //   .then(function() {
  // window.location.href = "/api/recipe/allbreakfast";
  //   });

  $.ajax({
    method: 'GET',
    url: '/api/recipe/allbreakfast',
  }).then((results) => {
    console.log(results);

    $('.userSearchRecipe').empty();
    results.forEach(function (response) {
      $('.userSearchRecipe').append(` 
                
                <div class="recipe">
                <img class="home-image"
                    src="${response.recipe.image}"
                    alt="recipe" />
                <div class="recipe-info">
                    <h3>${response.recipe.label}</h3>
                    <span class="veggie">VEG</span>
                </div>
                <div class="overview">
                    <h4>${response.recipe.label}</h4>
                   
                    
                    
                    <p id="ingredients">${response.recipe.ingredientLines}</p>
                    <button id="ingredientsBtn" type="submit" class="btn #1B5E20 green darken-4">Add to Shopping List</button>
                    <br><br>
                    <a href=${response.recipe.url} target="_blank" class="btn #1B5E20 green darken-4">Click here for the Recipe!</a>
                    
                    
                </div>
                
              
            </div>
    
            
            `);
    });
  });
}

$('.breakfast').on('click', function (event) {
  console.log('breakfast button clicked');
  getBreakfast();
});

// Lunch
function getLunchDin() {
  $.ajax({
    method: 'GET',
    url: '/api/recipe/alllundin',
  }).then((results) => {
    console.log(results);

    $('.userSearchRecipe').empty();
    results.forEach(function (response) {
      $('.userSearchRecipe').append(` 
                    
                    <div class="recipe">
                    <img class="home-image"
                        src="${response.recipe.image}"
                        alt="recipe" />
                    <div class="recipe-info">
                        <h3>${response.recipe.label}</h3>
                        <span class="veggie">VEG</span>
                    </div>
                    <div class="overview">
                        <h4>${response.recipe.label}</h4>
                       
        
                      <p id="ingredients">${response.recipe.ingredientLines}</p>
                      <button id="ingredientsBtn" type="submit">Add to Shopping List</button>
                      <br><br>
                      <a href=${response.recipe.url} target="_blank" class="btn #1B5E20 green darken-4">Click here for the Recipe!</a>
                        
                    </div>
                </div>
        
                `);
    });
  });
}

$('.lunchdin').on('click', function (event) {
  console.log('lunchdin button clicked');
  getLunchDin();
});

// Dessert
function getDesserts() {
  $.ajax({
    method: 'GET',
    url: '/api/recipe/alldesserts',
  }).then((results) => {
    console.log(results);

    $('.userSearchRecipe').empty();
    results.forEach(function (response) {
      $('.userSearchRecipe').append(` 
                        
                        <div class="recipe">
                        <img class="home-image"
                            src="${response.recipe.image}"
                            alt="recipe" />
                        <div class="recipe-info">
                            <h3>${response.recipe.label}</h3>
                            <span class="veggie">VEG</span>
                        </div>
                        <div class="overview">
                            <h4>${response.recipe.label}</h4>
                           
            
                            
                            <p id="ingredients">${response.recipe.ingredientLines}</p>
                            <button id="ingredientsBtn" type="submit">Add to Shopping List</button>
                            <br><br>
                            <a href=${response.recipe.url} target="_blank" class="btn #1B5E20 green darken-4">Click here for the Recipe!</a>
                            
                        </div>
                    </div>
            
                    `);
    });
  });
}

$('.desserts').on('click', function (event) {
  console.log('desserts button clicked');
  getDesserts();
});

// Snacks
function getSnacks() {
  $.ajax({
    method: 'GET',
    url: '/api/recipe/allsnacks',
  }).then((results) => {
    console.log(results);

    $('.userSearchRecipe').empty();
    results.forEach(function (response) {
      $('.userSearchRecipe').append(` 
                          
                          <div class="recipe">
                          <img class="home-image"
                              src="${response.recipe.image}"
                              alt="recipe" />
                          <div class="recipe-info">
                              <h3>${response.recipe.label}</h3>
                              <span class="veggie">VEG</span>
                          </div>
                          <div class="overview">
                              <h4>${response.recipe.label}</h4>
                              <a href="#" onclick='window.open("${response.recipe.url}");return false;'><button>Get Recipe<button></a>
              
                            
                              <p id="ingredients">${response.recipe.ingredientLines}</p>
                    <button id="ingredientsBtn" type="submit">Add to cart</button>
                    <br><br>
                    <a href=${response.recipe.url} target="_blank">Click here for the Recipe!</a>
                              
                          </div>
                      </div>
              
                      `);
    });
  });
}

$('.snacks').on('click', function (event) {
  console.log('snacks button clicked');
  getSnacks();
});

// Gluten Free
function getGlutenFree() {
  $.ajax({
    method: 'GET',
    url: '/api/recipe/allgluten',
  }).then((results) => {
    console.log(results);

    $('.userSearchRecipe').empty();
    results.forEach(function (response) {
      $('.userSearchRecipe').append(` 
                        
                        <div class="recipe">
                        <img class="home-image"
                            src="${response.recipe.image}"
                            alt="recipe" />
                        <div class="recipe-info">
                            <h3>${response.recipe.label}</h3>
                            <span class="veggie">VEG</span>
                        </div>
                        <div class="overview">
                            <h4>${response.recipe.label}</h4>
                           
            
                            
                            <p id="ingredients">${response.recipe.ingredientLines}</p>
                            <button id="ingredientsBtn" type="submit">Add to Shopping List</button>
                            <br><br>
                            <a href=${response.recipe.url} target="_blank" class="btn #1B5E20 green darken-4">Click here for the Recipe!</a>
                            
                        </div>
                    </div>
            
                    `);
    });
  });
}

$('.gf').on('click', function (event) {
  console.log('snacks button clicked');
  getGlutenFree();
});

// Allergen
function getAllergen() {
  $.ajax({
    method: 'GET',
    url: '/api/recipe/allallergen',
  }).then((results) => {
    console.log(results);

    $('.userSearchRecipe').empty();
    results.forEach(function (response) {
      $('.userSearchRecipe').append(` 
                          
                          <div class="recipe">
                          <img class="home-image"
                              src="${response.recipe.image}"
                              alt="recipe" />
                          <div class="recipe-info">
                              <h3>${response.recipe.label}</h3>
                              <span class="veggie">VEG</span>
                          </div>
                          <div class="overview">
                              <h4>${response.recipe.label}</h4>
                              
              
              
                           
                              <p id="ingredients">${response.recipe.ingredientLines}</p>
                              <button id="ingredientsBtn" type="submit">Add to Shopping List</button>
                              <br><br>
                              <a href=${response.recipe.url} target="_blank" class="btn #1B5E20 green darken-4">Click here for the Recipe!</a>
                              
                          </div>
                      </div>
              
                      `);
    });
  });
}

$('.allergen').on('click', function (event) {
  console.log('allergen button clicked');
  getAllergen();
});

// Recipe Search

function searchRecipe() {
  const searchBar = document.getElementById('search');

  searchBar.addEventListener('keyup', (e) => {
    const userInput = e.target.value;

    if (e.key === 'Enter') {
      $.ajax({
        method: 'GET',
        url: '/api/recipe/' + userInput,
      }).then((results) => {
        console.log(results);
        $('.userSearchRecipe').empty();
        results.forEach(function (response) {
          const recipeURL = response.recipe.url;
          console.log(recipeURL);
          $('.userSearchRecipe').append(` 
                    
                    <div class="recipe">
                    <img class="home-image"
                        src="${response.recipe.image}"
                        alt="recipe" />
                    <div class="recipe-info">
                        <h3>${response.recipe.label}</h3>
                        <span class="veggie">VEG</span>
                    </div>
                    <div class="overview">
                        <h4>${response.recipe.label}</h4>
                        
                      
        
                      <p id="ingredients">${response.recipe.ingredientLines}</p>
                    <button id="ingredientsBtn" type="submit" class="btn #1B5E20 green darken-4">Add to Shopping List</button>
                    <br><br>
                    <a href=${response.recipe.url} target="_blank" class="btn #1B5E20 green darken-4">Click here for the Recipe!</a>
                        
                    </div>
                   
                </div>   
                             
                `);
        });
      });
    }
  });
}

searchRecipe();
