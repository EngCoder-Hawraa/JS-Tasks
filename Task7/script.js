let products = {
    data:[{
        productName: "Medical 1",
        category: "Medical",
        price: "30",
        image: "medical1.jpg",
    },
    {
        productName: "Electronic 1",
        category: "Electronic",
        price: "49",
        image: "electronic1.jpg",
    },
    {
        productName: "Shoe 1",
        category: "Shoes",
        price: "99",
        image: "shoe1.jpg",
    },
    {
        productName: "Shoe 2",
        category: "Shoes",
        price: "169",
        image: "shoe2.jpg",
    },
    {
        productName: "Medical 2",
        category: "Medical",
        price: "29",
        image: "Medical2.jpg",
    },
    {
        productName: "Clothes 1",
        category: "Clothes",
        price: "129",
        image: "clothes1.jpg",
    },
    {
        productName: "Electronic 2",
        category: "Electronic",
        price: "89",
        image: "electronic2.jpg",
    },
    {
        productName: "Medical 3",
        category: "Medical",
        price: "89",
        image: "Medical3.png",
    },
    {
        productName: "Clothes 2",
        category: "Clothes",
        price: "189",
        image: "clothes2.jpg",
    }
    ,
    {
        productName: "Clothes 3",
        category: "Clothes",
        price: "1296",
        image: "clothes3.jpg",
    }
    ,
    {
        productName: "Clothes 4",
        category: "Clothes",
        price: "1208",
        image: "clothes4.jpg",
    }
    ,
    {
        productName: "Clothes 5",
        category: "Clothes",
        price: "199",
        image: "clothes5.jpg",
    }
    ,
    {
        productName: "Clothes 6",
        category: "Clothes",
        price: "1879",
        image: "clothes6.jpg",
    },
    {
        productName: "Electronic 3",
        category: "Electronic",
        price: "49",
        image: "electronic3.jpg",
    },
    {
        productName: "Electronic 4",
        category: "Electronic",
        price: "76",
        image: "electronic4.jpg",
    },
],
};
for (let i of products.data){
    // Create Card
    let card = document.createElement("div");
    // Card sould have category and shouls stay hidden initiality
    card.classList.add("card",i.category,"hide");
    // image div 
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //Container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name)
    // price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);



    card.appendChild(container)
    document.getElementById("products").appendChild(card);
}



// parameter passed from button (Parameter same as category)
function filterProduct(value){
    // Button Class Code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // check if value equals innerText 
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        }
        else{
            button.classList.remove("active")
        }
    });


    // select all cards
    let elements = document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach((element) => {
        // Display all Cards on 'all' button click
        if (value == "all"){
            element.classList.remove("hide")
        }
        else{
            // check if element contains category class
            if(element.classList.contains(value)){
                // display element based on category 
                element.classList.remove("hide");
            }
            else{
                // hide other elements
                element.classList.add("hide");
            }
        };
    });
};


// intiality Diasplay all Products
window.onload = () => {
    filterProduct("all");
};