const logoAnimation = document.querySelector(".nav-logo"),
    animateLogo = document.querySelector(".logo svg"),
    animateLogoTxt = document.querySelector(".logo-txt"),
    darkModes = document.querySelectorAll(".toggle-btn"),
    iconDisplay = document.querySelector(".tog-icon"),
    htmlController = document.querySelector("html");

// logoAnimation.addEventListener("mouseover", () => {
//     animateLogo.classList.add("animate")
//     animateLogoTxt.classList.add("animate")
// });

// logoAnimation.addEventListener("mouseleave", () => {
//     animateLogo.classList.remove("animate")
//     animateLogoTxt.classList.remove("animate")
// });

darkModes.forEach((darkMode) => {
    darkMode.addEventListener("click", () => {
        htmlController.classList.toggle("dark");
        iconDisplay.classList.toggle("bx-sun")
        iconDisplay.classList.toggle("bxs-moon")
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav-main");
    function onScroll() {
        const scrollPosition = window.scrollY;
        const triggerOffset = 5;
        if (scrollPosition > triggerOffset) 
        {
            nav.classList.add("nav-bar-width");
        } else 
        {
            nav.classList.remove("nav-bar-width");
        }
    }
    window.addEventListener("scroll", onScroll);
});   

document.addEventListener("DOMContentLoaded", function() 
    {
        const sidebarMenuButton = document.querySelector(".sidebar-menu-button");
        const sidebarOverlay = document.querySelector(".sidebar-menu-overlay");
        const sidebarContainer = document.querySelector(".sidebar-menu-container");
              
        sidebarMenuButton.addEventListener("click", function() 
        {
            sidebarOverlay.classList.toggle("active");
            sidebarContainer.classList.toggle("active");
        });
    });

