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

