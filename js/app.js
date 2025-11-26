fetch("components/login/login.html").then(response => response.text()).then(data => {
    document.getElementById("root").innerHTML = data;
});