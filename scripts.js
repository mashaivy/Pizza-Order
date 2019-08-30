//user int
    $(document).ready(function() {
    $("input#pizza1").click(function(event){
        event.preventDefault();
        $("#cheeseToppings").show();
    });
    $("input#pizza2").click(function(event){
        event.preventDefault();
        $("#hawaiianToppings").show();
    });
    $("input#pizza3").click(function(event){
    event.preventDefault();
    $("#veggieToppings").show();
    });

    //bussiness logic
$("form#pizzas").submit(function(event) {
        event.preventDefault();
    var cheeseTopping= $("#cheeseTopp option:selected").val();
    console.log(cheeseTopping)
});

});
