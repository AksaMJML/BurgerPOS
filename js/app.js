let root = document.getElementById("root");
let navBar = document.getElementById("navBar");
let myChart = document.getElementById("myChart");
let footer = document.getElementById("footer");

fetch("components/navBar/navBar.html")
    .then(response => response.text())
    .then(data => {
        navBar.innerHTML += data;
    })

fetch("components/login/login.html")
    .then(response => response.text())
    .then(data => {
        root.innerHTML += data;
    });

function placeOrderView() {
    fetch("components/placeOrder/placeorder.html")
        .then(response => response.text())
        .then(data => {
            myChart.innerHTML += data;
        })
}


// fetch("components/register/register.html")
//     .then(response => response.text())
//     .then(data => {
//         root.innerHTML += data;
//     })

function shopBurger(){
    fetch("components/shop/shop.html")
        .then(response => response.text())
        .then(data => {
            root.innerHTML += data;
        })
}

function cartburgerl(){
    fetch("components/cart/cart.html")
        .then(response => response.text())
        .then(data => {
            root.innerHTML += data;
        })
}

function signIn() {
    fetch("components/register/register.html")
        .then(response => response.text())
        .then(data => {
            root.innerHTML += data;
        })
}



fetch("footerPage/footer.html")
    .then(response => response.text())
    .then(data => {
        footer.innerHTML += data;
    })


