document.addEventListener("resize", function() {  
    if(window.innerWidth < 1200) {
        let icon = document.querySelector("header i");
        let nav = document.querySelector("nav");
        let links = document.querySelectorAll("nav li");

        function toggleNav() {
            if(window.getComputedStyle(nav).display == "none") {
                icon.classList.replace("fa-bars", "fa-times");
                nav.style.display = "block";
            }
            else {
                icon.classList.replace("fa-times", "fa-bars");
                nav.style.display = "none";
            }
        }

        icon.addEventListener("click", toggleNav);
        links.forEach(item => item.addEventListener("click", toggleNav));
    }
});  
