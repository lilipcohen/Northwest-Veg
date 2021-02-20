// const { allRecipes } = require("../../../controllers/recipes_controller");

// $(document).ready(function () {
//     function getBreakfast(allBreakfast) {
//         // $.ajax({
//         //   method: "GET",
//         //   url: "/api/recipe/allrecipes",
//         //   data: allBreakfast
//         // })
//         //   .then(function() {
//         window.location.href = "/api/recipe/allbreakfast";
//         //   });
//     }
//     $(".breakfast").on("click", function (event) {
//         getBreakfast();

//     });




function searchRecipe() {
    const searchBar = document.getElementById("search");

    searchBar.addEventListener("keyup", e => {

        const userInput = e.target.value;
        



        if (e.key === "Enter") {
            
            $.ajax({
                method: "GET",
                url: "/api/recipe/" + userInput
            }).then(results => {
                console.log(results)
                $(".userSearchRecipe").empty();
                results.forEach(function (response) {
                    $(".userSearchRecipe").append(` 
                    
                    <div class="recipe">
                    <img class="home-image"
                        src="${response.recipe.image}"
                        alt="recipe" />
                    <div class="recipe-info">
                        <h3>${response.recipe.label}</h3>
                        <span class="veggie">VEG</span>
                    </div>
                    <div class="overview">
                        <h3>${response.recipe.label}</h3>
        
                        
                    </div>
                </div>
        
                
                `)



                })

            })






        }

    })
}

searchRecipe();







