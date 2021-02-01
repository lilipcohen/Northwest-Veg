// once form is submitted, a new form displays on the page
function submitForm(form) {
    $.post("/facilityform", form, function () {
        window.location.href = "/facilityform";
    });
}

// information of new facility from form gets displayed on facility page
// originally the submitbt had a . instead of the #. Switched on 'submit' to on 'click'
$("#submitbtn").on("click", function () {
    console.log("is this working");
    let newFacility = {
        name: $("#facility_name").val().trim(),
        address: $("#address").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        postalcode: $("#postalcode").val().trim(),
        email: $("#email").val().trim(),
        description: $("#description").val().trim()
    };
// passed in the information that we were receiving from the user in newFacility and passed it into submitForm
    submitForm(newFacility);

    $.ajax("/api/facility", {
        type: "POST",
        data: newFacility
    }).then(function () {
        console.log("Created new facility");
        // Reload page to get updated list
        location.reload();
    });
});

