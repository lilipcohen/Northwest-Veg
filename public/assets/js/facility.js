
function submitFormData(newFacility) {
    $.ajax("/api/facility", {
        type: "POST",
        data: newFacility
    }).then(function () {
         $("#facilform").hide();
         $("#message").html("Success!");
    });
}



$("#facilform").on("submit", function (event) {
    event.preventDefault();
    let newFacility = {
        name: $("#facility_name").val().trim(),
        address: $("#address").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        postalcode: $("#postalcode").val().trim(),
        email: $("#email").val().trim(),
        description: $("#description").val().trim()
    };

   submitFormData(newFacility);

   

    
});

