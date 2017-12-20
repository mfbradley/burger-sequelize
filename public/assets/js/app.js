$(function() {

    $(".change-devour").on('click', function(event) {

        var id = $(this).data('id');
        var newEat = $(this).data('neweat');

        var newEatState = {
            devoured: newEat
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("devoured burger ", newEat);
                location.reload();
            }
        );
        console.log("working");
    });

    $("#addBurger").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
        console.log(newBurger);
    });

});
