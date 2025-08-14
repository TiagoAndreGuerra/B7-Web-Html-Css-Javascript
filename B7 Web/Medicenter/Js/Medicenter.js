/* Texto Para Programadores */
window.onload = function () {
    document.querySelector(".menumobile").addEventListener("click", function () {
        let menuList = document.querySelector(".menu nav ul");
        if (menuList.style.display === "flex") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "flex";
        }
    });
};
