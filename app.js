//Order now button function

function orderNow() {
    //User Input for food order
    var userInput = prompt(
        "Please Let us Know What you want to Order ?\nMain Menu\nDrinks\nSweet"
    );
    var b = userInput.toLowerCase();

    //Data in arrays
    var food = [
        "biryani", "<br>",
        "pizza", "<br>",
        "tikka", "<br>",
        "nihari", "<br>",
        "zinger burger", "<br>",
        "burger", "<br>",
        "daal", "<br>",
        "qorma", "<br>",
        "fries", "<br>",
        "korma", "<br>",
        "pulao", "<br>",
        "paya", "<br>",
        "kabab", "<br>",
        "haleem", "<br>",
        "paratha", "<br>",
        "roll", "<br>",
        "roll paratha", "<br>",
        "fish", "<br>",
        "prawns", "<br>",
        "karahi", "<br>",
        "pakora", "<br>",
    ];
    var drinks = [
        "lassi", "<br>",
        "pepsi", "<br>",
        "7up", "<br>",
        "sting", "<br>",
        "dew", "<br>",
        "mirinda", "<br>",
        "fanta", "<br>",
        "coke", "<br>",
        "cocacola", "<br>",
        "pakola", "<br>",
        "coffee", "<br>",
        "milkshake", "<br>",
    ];
    var sweet = [
        "rabri", "<br>",
        "gulab jamun", "<br>",
        "ras malai", "<br>",
        "cake", "<br>",
        "donut", "<br>",
        "ice cream", "<br>",
    ];
    var foodPrices = [
        100, "<br>",
        500, "<br>",
        380, "<br>",
        220, "<br>",
        300, "<br>",
        280, "<br>",
        120, "<br>",
        150, "<br>",
        100, "<br>",
        150, "<br>",
        120, "<br>",
        170, "<br>",
        270, "<br>",
        140, "<br>",
        30, "<br>",
        150, "<br>",
        150, "<br>",
        550, "<br>",
        750, "<br>",
        800, "<br>",
        30, "<br>",
    ];
    var drinksPrices = [
        80, "<br>",
        60, "<br>",
        60, "<br>",
        80, "<br>",
        60, "<br>",
        50, "<br>",
        50, "<br>",
        50, "<br>",
        50, "<br>",
        60, "<br>",
        100, "<br>",
        160, "<br>",
    ];
    var sweetpp = [
        250, "<br>",
        250, "<br>",
        120, "<br>",
        500, "<br>",
        220, "<br>",
        140, "<br>",
    ];

    //Getting Elements in DOM
    var firstInput = document.getElementById("output").value;
    document.getElementById("head").value;
    document.getElementById("head").value;
    document.getElementById("sub2").value;

    //Condtions for User
    var flag = true;
    if (b === "main menu") {
        var foodInput = prompt(
            "Please let us know what you want to order in Main Course"
        );

        for (var i = 0; i <= food.length; i++) {
            var c = foodInput.toLowerCase();
            if (c === food[i]) {

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
                break;
            } else if (c === "") {
                swal("Please Type The Name of Dish you want from Main Menu");
                document.getElementById("sub2").innerHTML =
                    " In Main Menu we have " + "<br>" + food + "<br>";
                ("<br />");


            } else if (c != food[i]) {

                document.getElementById("sub2").innerHTML =
                    " In Main Course we have " + "<br>" + food + "<br>";
                ("<br />");
                document.getElementById("output").innerHTML =
                    c + " is not Available"

            } else if (c === "") {
                {
                    swal("Please Select the Menu Correctly!");

                }

            }
        }
    }
    if (b === "") {

        swal("Please Type the Category Correctly !");

    }


    //Condition 2

    if (b === "drinks") {
        foodInput = prompt(
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
                ("<br />");

                document.getElementById("sub1").innerHTML =
                    " In Sweet Dishes we have " + "<br>" + sweet;
                ("<br />");
                break;

            } else if (d === "") {
                swal("Please Type The Name of Drink you want !");
                document.getElementById("sub2").innerHTML =
                    " In Drinks we have " + "<br>" + drinks + "<br>";
                ("<br />");


            } else if (d != drinks[i]) {

                document.getElementById("sub2").innerHTML =
                    " In Drinks we have " + "<br>" + drinks + "<br>";
                ("<br />");
                document.getElementById("output").innerHTML =
                    d + " is not Available"

            }

        }
    }

    //Condition 3
    if (b === "sweet" || b === "sweets") {
        foodInput = prompt("Please let us know what you want in Sweets");

        for (var i = 0; i <= sweet.length; i++) {
            var e = foodInput.toLowerCase();
            if (e === sweet[i]) {
                document.getElementById("output").innerHTML =
                    "<b>" +
                    sweet[i] +
                    " is Available & It's Price is Rs. " + sweetpp[i] +
                    "</b>";
                document.getElementById("head").innerHTML =
                    "Main Menu & Drinks Also Available at our Restaurant";

                document.getElementById("sub2").innerHTML =
                    " In Main Menu we have " + "<br>" + food + "<br>";

                document.getElementById("sub1").innerHTML =
                    " In Drinks we have " + "<br>" + drinks;
                ("<br />");
                break;
            } else if (e === "") {
                swal("Please type the Name of Sweet Dish you want");
                document.getElementById("sub2").innerHTML =
                    " In Sweets we have " + "<br>" + sweet + " <br> ";
            } else if (e !== sweet[i]) {
                document.getElementById("output").innerHTML =
                    e + " is Not Available";
                "<br />";
                document.getElementById("sub2").innerHTML =
                    "In Sweets we have " + "<br> " + sweet + "<br>";

            }
        }

    }


}