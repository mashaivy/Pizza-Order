//user int
var resultArray = [];
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
        var cheeseTopping= $("#cheeseTopp option:selected").text();
        var cheeseSize= $("#cheeseSize option:selected").text();
        var hawaiianTopping= $("#hawaiianTopp option:selected").text();
        var hawaiianSize= $("#hawaiianSize option:selected").text();
        var veggieTopping= $("#veggieTopp option:selected").text();
        var veggieSize= $("#veggieSize option:selected").text();

//bussness
        var cheese = new Pizza(cheeseTopping, cheeseSize, 10)
        var hawaiian = new Pizza (hawaiianTopping, hawaiianSize, 10)
        var veggie = new Pizza(veggieTopping, veggieSize, 10)
        function Pizza (toppings, size, cost){
            this.toppings = toppings;
            this.size = size;
            this.cost = cost;
};
        Pizza.prototype.extraCost = function() {
            this.cost+=2}

//extra toppings calculator
        if (cheeseTopping === "Extra Cheese +2" ) {
            cheese.extraCost()
 }

        if (hawaiianTopping === "Extra Cheese +2")  {
            hawaiian.extraCost()
}

        if (veggieTopping === "Extra Cheese +2") {
            (veggie.extraCost() )
}
//size calculator
        if (cheeseSize === "Large +4" ) {
            resultArray.push(cheese.cost+=4)
}
        if (hawaiianSize === "Large +4" ) {
            resultArray.push(hawaiian.cost+=4)
}
        if (veggieSize === "Large +4" ) {
            resultArray.push(veggie.cost+=4)
}
        if (cheeseSize === "Small" ) {
            resultArray.push(cheese.cost+=0)
}
        if (hawaiianSize === "Small" ) {
            resultArray.push(hawaiian.cost+=0)
}
        if (veggieSize === "Small" ) {
            resultArray.push(veggie.cost+=0)
}
        $("#total").append(resultArray)
});
});
