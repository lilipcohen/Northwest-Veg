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
            console.log(this.value);
            $.ajax({
                method: "GET",
                url: "/api/recipe/" + userInput
            }).then(results => {
                console.log(results)
       $("#main").empty();
                results.forEach(function (response) {
                    $("#main").append(` 
                    
                    <div class="recipe">
                    <img class="home-image"
                        src="${response.recipe.image}"
                        alt="fruits and veggies" />
                    <div class="recipe-info">
                        <h3>Breakfast</h3>
                        <span class="veggie">VEG</span>
                    </div>
                    <div class="overview">
                        <h3>${response.recipe.label}</h3>
        
                        <br><a href="/api/recipe/allbreakfast" class="waves-effect #7cb342 light-green darken-1 btn">Get
                            recipes</a>
                    </div>
                </div>
        
                
                `)



                })

            })






        }

    })
}

searchRecipe();







