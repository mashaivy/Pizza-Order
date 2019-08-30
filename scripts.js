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
        //CHEESE TOPPING SELECT
        var cheeseTopping= $("#cheeseTopp option:selected").text();
        console.log(cheeseTopping)
        //CHEESE SIZE SELECT
    var cheeseSize= $("#cheeseSize option:selected").text();
    console.log(cheeseSize)
    //HAWAIIAN TOPPING SELECT
    var hawaiianTopping= $("#hawaiianTopp option:selected").text();
    console.log(hawaiianTopping)
    //HAWAIIAN SIZE SELECT
    var hawaiianSize= $("#hawaiianSize option:selected").text();
    console.log(hawaiianSize)
    //Veggie TOPPING select
    var veggieTopping= $("#veggieTopp option:selected").text();
    console.log(veggieTopping)
    //VEGGIE TOPPING SELECT
    var veggieSize= $("#veggieSize option:selected").text();
    console.log(veggieSize)


});

});
