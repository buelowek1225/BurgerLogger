$(function() {
    $(".buttonSubmit").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        // console.log($("#bn").val().trim());
        var newBurger = {
            name: ($("#bn").val().trim()),
            devoured: "False",
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }). then(
            function() {
                console.log("created a new burger");
                // location.reload();
            }
        )
    });

    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
   
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
        //   not sending data so we insert empty object
          data: {}
        }).then(
          function() {
            console.log("changed");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
});

