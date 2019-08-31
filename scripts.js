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

$("form#pizzas").submit(function(event) {
        event.preventDefault();
        //CHEESE TOPPING SELECT
        var cheeseTopping= $("#cheeseTopp option:selected").text();
        //console.log(cheeseTopping)
        //CHEESE SIZE SELECT
    var cheeseSize= $("#cheeseSize option:selected").text();
//    console.log(cheeseSize)
    //HAWAIIAN TOPPING SELECT
    var hawaiianTopping= $("#hawaiianTopp option:selected").text();
//    console.log(hawaiianTopping)
    //HAWAIIAN SIZE SELECT
    var hawaiianSize= $("#hawaiianSize option:selected").text();
    //console.log(hawaiianSize)
    //Veggie TOPPING select
    var veggieTopping= $("#veggieTopp option:selected").text();
//    console.log(veggieTopping)
    //VEGGIE SIZE SELECT
    var veggieSize= $("#veggieSize option:selected").text();
    //console.log(veggieSize)



//bussness
    var cheese = new Pizza(cheeseTopping, cheeseSize, 10)
        //console.log(cheese)
    //console.log(cheese)

    var hawaiian = new Pizza (hawaiianTopping, hawaiianSize, 10)
    //console.log(hawaiian)

    var veggie = new Pizza(veggieTopping, veggieSize, 10)
    //console.log(veggie)

    function Pizza (toppings, size, cost){
        this.toppings = toppings;
        this.size = size;
        this.cost = cost;

    };

        Pizza.prototype.extraCost = function() {
            this.cost+=2}
            //large size calculator
            if (cheeseTopping === "Extra Cheese" ) {
            cheese.extraCost() }

            if (hawaiianTopping === "Extra Cheese") {
                hawaiian.extraCost() }

            if (veggieTopping === "Extra Cheese") {
                veggie.extraCost() }
                //console.log(veggie)
                //extra toppings calculator
            if (cheeseSize === "Large" ) {
               cheese.cost+=4 }
               console.log(cheese)

            if (hawaiianSize === "Large" ) {
                hawaiian.cost+=4 }
                console.log(hawaiian)

            if (veggieSize === "Large" ) {
                veggie.cost+=4 }
            //    console.log(veggie)
            })
});
