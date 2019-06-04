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
});
  