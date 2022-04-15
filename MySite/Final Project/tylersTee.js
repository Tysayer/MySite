"use strict";
const $ = selector => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {});


const items = ["Espresso", "Latte", "Cappuccino", "Coffee", "Biscotti", "Scone"]
const prices = ["$1.95", "$2.95", "$3.45", "$1.75", "$1.95", "$2.95"]
    //const mainImage = $("#main_image"); // the main img element
var total = 0

const imageLinks = $("#image_list").querySelectorAll("img");

// process image links
for (let image of imageLinks) {
    // attach event handler
    image.addEventListener("click", evt => {
        // mainImage.src = image.id;
        //mainImage.alt = image.title;
        //order.textContent = image.title;
        // cancel the default action of the event
        evt.preventDefault();

        //determine which item was clicked
        var itemClicked = image.id;

        //Add to the select list of items clicked

        //create new option item for select
        const newOption = document.createElement("option");
        //test to see which image was clicked
        // add selection to text and total
        //console.log(itemClicked)
        if (itemClicked == "images/espresso.jpg") {
            //set attribute for new option
            newOption.setAttribute('value', itemClicked);
            //create new text node and append to new option 
            newOption.appendChild(document.createTextNode(
                items[0] +
                " " +
                prices[0]));
            //append newOption to select list
            $("#list").appendChild(newOption);
            total = total + 1.95

            $("#total").textContent = "Order Total $" +
                total.toFixed(2)


        } else if (itemClicked == "images/latte.jpg") {
            //set attribute for new option
            newOption.setAttribute('value', itemClicked)
                //create new text node and append to new option 
            newOption.appendChild(document.createTextNode(items[1] + " " + prices[1]));
            //append newOption to select list
            $("#list").appendChild(newOption);
            total = total + 2.95;
            $("#total").textContent = "Order Total $" +
                total.toFixed(2)
        } else if (itemClicked == "images/cappuccino.jpg") {
            //set attribute for new option
            newOption.setAttribute('value', itemClicked)
                //create new text node and append to new option 
            newOption.appendChild(document.createTextNode(items[2] + " " + prices[2]));
            //append newOption to select list
            $("#list").appendChild(newOption);
            total = total + 3.45;
            $("#total").textContent = "Order Total $" +
                total.toFixed(2)

        } else if (itemClicked == "images/coffee.jpg") {
            //set attribute for new option
            newOption.setAttribute('value', itemClicked)
                //create new text node and append to new option 
            newOption.appendChild(document.createTextNode(items[3] + " " + prices[3]));
            //append newOption to select list
            $("#list").appendChild(newOption);
            total = total + 1.75;
            $("#total").textContent = "Order Total $" +
                total.toFixed(2)

        } else if (itemClicked == "images/biscotti.jpg") {
            //set attribute for new option
            newOption.setAttribute('value', itemClicked)
                //create new text node and append to new option
            newOption.appendChild(document.createTextNode(items[4] + " " + prices[4]));
            //append newOption to select list
            $("#list").appendChild(newOption);
            total = total + 1.95;
            $("#total").textContent = "Order Total $" +
                total.toFixed(2)

        } else if (itemClicked == "images/scone.jpg") {
            //set attribute for new option
            newOption.setAttribute('value', itemClicked)
                //create new text node and append to new option
            newOption.appendChild(document.createTextNode(items[5] + " " + prices[5]));
            $("#list").appendChild(newOption);
            total = total + 2.95;
            $("#total").textContent = "Order Total $" +
                total.toFixed(2)
        }
        //console.log(newOption)
    });





    image.addEventListener("mouseover", evt => {
        // set new image and caption
        image.src = image.alt;
        // mainImage.alt = link.title;
        // caption.textContent = link.title;
        // cancel the default action of the event
        evt.preventDefault();
    });

    image.addEventListener("mouseout", evt => {
        // set new image and caption
        image.src = image.id;
        // mainImage.alt = link.title;
        // caption.textContent = link.title;
        // cancel the default action of the event
        evt.preventDefault();
    });
}
$("#clear_order").addEventListener("click", evt => {
    //clear options from select box
    //const options = document.querySelectorAll("option")
    //console.log(options)
    // options.remove()
    // document.querySelectorAll("option").remove()
    const selectBox = $("select")
    console.log(selectBox)
    selectBox.innerHTML = ""
    total = 0
    $("#total").textContent = ""
});
$("#place_order").addEventListener("click", evt => {
    const ordered = document.querySelector
    if (itemClicked, "total" == 0) alert("place order");
    else(itemClicked, "total" > 0)
    window.open("checkout.html", _top)


});