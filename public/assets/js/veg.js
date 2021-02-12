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
