<<<<<<< HEAD
$(document).ready(function() {
    function getBreakfast(allBreakfast) {
    // $.ajax({
    //   method: "GET",
    //   url: "/api/recipe/allrecipes",
    //   data: allBreakfast
    // })
    //   .then(function() {
        window.location.href = "/api/recipe/allbreakfast";
    //   });
    }
    $(".breakfast").on("click", function (event) {
        getBreakfast();
    
    });
});
=======
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




async function searchRecipe() {
    const searchBar = document.getElementById("search");

    searchBar.addEventListener("keyup", e => {

        const userInput = e.target.value;

        if (e.key === "Enter") {
            console.log(this.value);
            $.ajax({
                method: "GET",
                url: "/api/recipe/" + userInput

            }).then(function (results) {
                //    const userSearch = JSON.parse(results);
                   $("#main").html(results);
                });
        }


    })

}





searchRecipe();
>>>>>>> main

