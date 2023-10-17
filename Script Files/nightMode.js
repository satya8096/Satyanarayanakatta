let night = document.querySelector('.night-mode');

night.onclick = () =>{

    let BodyTheam = document.body;

    BodyTheam.classList.toggle('dark');
    BodyTheam.classList.toggle('light');

    let nightIcon = document.querySelector('.night-mode');
    let Logo = document.querySelector('.logo');

    let navBar = document.querySelector(".nav-dark");
    let navlink1 = document.querySelector(".nav-link1");
    let navlink2 = document.querySelector(".nav-link2");
    let navlink3 = document.querySelector(".nav-link3");
    let navlink4 = document.querySelector(".nav-link4");
    let navlink5 = document.querySelector(".nav-link5");
    let navlink6 = document.querySelector(".nav-link6");
    let navlink7 = document.querySelector(".nav-link7");

    var theme;

    if(BodyTheam.classList.contains('dark')){
        nightIcon.src = "./images/brightness_8637690.png";
        navBar.style.backgroundColor = "#2a2929";
        navlink1.style.color = "white";
        navlink2.style.color = "white";
        navlink3.style.color = "white";
        navlink4.style.color = "white";
        navlink5.style.color = "white";
        navlink6.style.color = "white";
        navlink7.style.color = "white";
        theme = "DARK";
        Logo.style.color = "#F7B32B";
    }
    else{
        nightIcon.src = "./images/moon_2116191.png";
        navBar.style.backgroundColor = "rgb(247, 247, 247)";
        navlink1.style.color = "black";
        navlink2.style.color = "black";
        navlink3.style.color = "black";
        navlink4.style.color = "black";
        navlink5.style.color = "black";
        navlink6.style.color = "black";
        navlink7.style.color = "black";
        theme = "LIGHT";
        Logo.style.color = "#258";

    }

    localStorage.setItem("pageTheme" , JSON.stringify(theme));
} 

let GetThem = JSON.parse(localStorage.getItem("pageTheme"));

if(GetThem === "DARK"){

    document.body.classList = "dark";
    document.body.classList.add('light');

    let navBar = document.querySelector(".nav-dark");
    let navlink1 = document.querySelector(".nav-link1");
    let navlink2 = document.querySelector(".nav-link2");
    let navlink3 = document.querySelector(".nav-link3");
    let navlink4 = document.querySelector(".nav-link4");
    let navlink5 = document.querySelector(".nav-link5");
    let navlink6 = document.querySelector(".nav-link6");
    let navlink7 = document.querySelector(".nav-link7");
    let nightIcon = document.querySelector('.night-mode');
    let Logo = document.querySelector('.logo');


    navBar.style.backgroundColor = "#2a2929";
    navlink1.style.color = "white";
    navlink2.style.color = "white";
    navlink3.style.color = "white";
    navlink4.style.color = "white";
    navlink5.style.color = "white";
    navlink6.style.color = "white";
    navlink7.style.color = "white";
    nightIcon.src = "./images/brightness_8637690.png";
    Logo.style.color = "#F7B32B";
}
else{
    let nightIcon = document.querySelector('.night-mode');
    let Logo = document.querySelector('.logo');

    nightIcon.src = "./images/moon_2116191.png";
    Logo.style.color = "#258";
}