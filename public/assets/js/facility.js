// once form is submitted, a new form displays on the page
function submitForm(form) {
    $.post("/facilityform", form, function () {
        window.location.href = "/facilityform";
    });
}

function submitFormData(newFacility) {
    $.ajax("/api/facility", {
        type: "POST",
        data: newFacility
    }).then(function () {
        submitForm(newFacility);
        
    });
}

function displayFormData(newFacility) {
    $.ajax("/api/facility", {
        type: "GET",
        data: newFacility
    }).then(function (req, res) {
        console.log("Please work");
        
    });
}

// information of new facility from form gets displayed on facility page

$("#submitbtn").on("click", function () {
    
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
   displayFormData(newFacility);
   

    
});

