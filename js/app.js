let root = document.getElementById("root");

fetch("components/login/login.html")
    .then(response => response.text())
    .then(data => {
        root.innerHTML += data;
    });