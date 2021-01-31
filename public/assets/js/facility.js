// information of new facility gets displayed on facility page
$(".submitbtn").on("submit", function () {
    let newFacility = {
        name: $("#facility_name").val().trim(),
        address: $("#address").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        postalcode: $("#postalcode").val().trim(),
        email: $("#email").val().trim(),
        description: $("#description").val().trim()
    }



    $.ajax("/api/facility", {
        type: "POST",
        data: newFacility
    }).then(function () {
        console.log("Created new facility");
        // Reload page to get updated list
        location.reload();
    })
});

