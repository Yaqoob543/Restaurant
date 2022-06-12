//Order now button function

function orderNow() {
    //User Input for food order
    var userInput = prompt(
        "Please Let us Know What you want to Order ?\nMain Course\nDrinks\nSweet"
    );
    var b = userInput.toLowerCase();


    //Data in arrays
    var food = [
        "biryani",
        "pizza",
        "tikka",
        "nihari",
        "zinger burger",
        "burger",
        "daal",
        "qorma",
        "fries",
        "korma",
        "pulao",
        "paya",
        "kabab",
        "haleem",
        "paratha",
        "roll",
        "roll paratha",
        "fish",
        "prawns",
        "karahi",
        "pakora",
    ];
    var drinks = [
        "lassi",
        "pepsi",
        "7up",
        "sting",
        "dew",
        "mirinda",
        "fanta",
        "coke",
        "cocacola",
        "pakola",
        "coffee",
        "milkshake",
    ];
    var sweet = [
        "rabri",
        "gulab jamun",
        "ras malai",
        "cake",
        "donut",
        "ice cream",
    ];
    var foodPrices = [
        100, 500, 380, 220, 300, 280, 120, 150, 100, 150, 120, 170, 270, 140, 30,
        150, 150, 550, 750, 800, 30,
    ];
    var drinksPrices = [
        80,
        60,
        60,
        80,
        60,
        50,
        50,
        50,
        50,
        60,
        100,
        160



    ]


    //Getting Elements in DOM
    var firstInput = document.getElementById("output").value;
    document.getElementById("head").value;
    document.getElementById("head").value;
    document.getElementById("sub2").value;

    //Condtions for User
    var flag = true;
    if (b === "main course") {
        var foodInput = prompt(
            "Please let us know what you want to order in Main Course"
        );

        for (var i = 0; i <= food.length; i++) {
            var c = foodInput.toLowerCase();
            if (c === food[i]) {
                flag = false;
                document.getElementById("output").innerHTML =
                    "<b>" +
                    food[i] +
                    " is Available & It's Price is Rs. " +
                    foodPrices[i] +
                    "</b>";
                document.getElementById("head").innerHTML =
                    "Sweets & Drinks Also Available at our Restaurant";
                ("<br />");
                document.getElementById("sub1").innerHTML =
                    " In Sweet Dishes we have " + "<br>" + sweet;
                ("<br />");
                document.getElementById("sub2").innerHTML =
                    " In Drinks we have " + "<br>" + drinks + "<br>";
            }
            if (b = "") {
                if (flag !== false) {
                    document.getElementById("output").innerHTML =
                        "<b>" +
                        c +
                        " is Not Avaiable ";
                }

            }

        }
    }


    //Condition 2
    if (b === "drinks") {
        var foodInput = prompt(
            "Please let us know what you want to order in Drinks"
        );

        for (var i = 0; i <= drinks.length; i++) {
            var d = foodInput.toLowerCase();
            if (d === drinks[i]) {
                document.getElementById("output").innerHTML =
                    "<b>" +
                    drinks[i] +
                    " is Available & It's Price is Rs. " +
                    drinksPrices[i] +
                    "</b>";
                document.getElementById("head").innerHTML =
                    "Main Course & Sweet Also Available at our Restaurant";

                document.getElementById("sub2").innerHTML =
                    " In Main Course we have " + "<br>" + food + "<br>";
                ("<br />")
                document.getElementById("sub2").innerHTML =
                    " In Main Course we have " + "<br>" + food + "<br>";
                ("<br />")
                // document.getElementById("sub1").innerHTML =
                //     " In Sweet Dishes we have " + "<br>" + sweet;
                // ("<br />");

            }
        }
    }
}