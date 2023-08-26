const projectContent = document.querySelector(".project-boxs");

const showprojects = document.querySelector(".projectshowcontent");


var projects = [
    { img:"./projectimages/Personal Portfolio.png",live:"https://satyanarayanakatta.netlify.app/",
        title:"Portfolio ",class1:"projectlinks ms-3 me-3",git:"https://github.com/satya8096/Satyanarayanakatta",
        tech: 4 },
    { img:"./projectimages/footstore.png",live:"https://footwear-store-by-satyanarayana.netlify.app/",
        title:"FootWear Store ",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/FootStore-by-satyanarayana",
        tech: 3 },
    {img:"./projectimages/calculator.png",live:"https://calculator-by-satyanarayana.netlify.app/",
        title:"Calculator",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Calculator-by-satyanarayana",
        tech: 3 },
    {img:"./projectimages/form Validation.png",live:"https://form-validation-by-satyanarayana.netlify.app/",
        title:"Form Validation",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Form-validation-by-satyanarayna",
        tech: 3},
    {img:"./projectimages/Temperature Change.png",live:"https://temperature-change-by-satyanarayana.netlify.app/",
        title:"Temperature Change",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Temperature-Change",
        tech: 3},
    {img:"./projectimages/Circle clock.png",live:"https://circle-clock-by-satyanarayana.netlify.app/",
        title:"Circle Clock",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Circle-clock-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/digital clock .png",live:"https://digital-watch-by-satyanarayana.netlify.app",
        title:"Digital Clock",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Digital-clock-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/ID card.png",live:"https://id-card-by-satyanarayana.netlify.app/",
        title:"ID Card ",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Id-card-By-satyanarayana",
        tech: 2},
    {img:"./projectimages/Profile Card.png",live:"https://profile-card-by-satyanarayana.netlify.app/",
        title:"Profile Card ",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Profile-card-by-satyanarayana",
        tech: 2},
    { img:"./projectimages/Profile Cards 1.png",live:"https://profile-card1-by-satyanarayana.netlify.app/",
        title:"Profile Card ",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Profile-card-1-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Sign In Sign Up .png",live:"https://login-page-by-satyanarayana.netlify.app/",
        title:"Sign In Page ",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Login-Page-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Codemind.png",live:"https://codemindfront.netlify.app/",
        title:"Codemind Page ",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Codemind-front-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Eating Game.png",live:"https://eating-challenge-game-by-satyanarayan.netlify.app/",
        title:"Eating Challenge",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Eating-challenge-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/Restaurant Page.png",live:"./commingsoon.html",
        title:"Restaurant Page",class1:"mt-5 ms-4 me-4",git:"./commingsoon.html",
        tech: 2},
    {img:"./projectimages/Mechanical Page.png",live:"./commingsoon.html",
        title:"Mechanical Page",class1:"mt-5 ms-4 me-4",git:"./commingsoon.html",
        tech: 2},
    {img:"./projectimages/Portfolio.png",live:"./commingsoon.html",
        title:"Portfolio",class1:"mt-5 ms-4 me-4",git:"./commingsoon.html",
        tech: 2},
    {img:"./projectimages/Stop Watch.png",live:"https://stop-watch-by-satyanarayana.netlify.app/",
        title:"Stop Watch",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Stop-watch-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/Linkedin page.png",live:"https://linkedin-login-by-satyanarayana.netlify.app/",
        title:"Linkedin Page",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Likedin-Login-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Answer Hide.png",live:"https://answer-hide-by-satyanarayana.netlify.app/",
        title:"Answer Hide",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Answer-hide-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/ATM card.png",live:"https://atm-card-by-satyanarayana.netlify.app/",
        title: "ATM Card ",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/ATM-card-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Border Effect.png",live:"https://border-effect-by-satyanarayana.netlify.app/",
        title:"Border Effect",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Border-style-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Age Calculator.png",live:"https://age-calculator-by-satyanarayana.netlify.app/",
        title:"Age Calculator",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Age-calculator-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/Background Change.png",live:"https://background-change-by-satyanarayana.netlify.app/",
        title:"Background Change",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/background-change-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/microsoft Icon.png",live:"https://microsoft-icon-by-satyanarayana.netlify.app/",
        title:"Microsoft Icon",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Mcrosoft-icon-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Mobile Card.png",live:"https://mobile-cards-by-satyanarayana.netlify.app/",
        title:"Mobile Cards",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Mobile-cards-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Music Player.png",live:"https://music-player-by-satyanarayana.netlify.app/",
        title:"Music Player",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Music-player-by-satyanarayana",
        tech: 2},
    {img:"./projectimages/Signin Signup page.png",live:"./commingsoon.html",
        title:"Sign Up Page",class1:"mt-5 ms-4 me-4",git:"./commingsoon.html",
        tech: 2},
    {img:"./projectimages/Password Hide.png",live:"https://password-hide-by-satyanarayana.netlify.app/",
        title:"Password Hide",class1:"mt-5 ms-4 me-4",git:"https://github.com/satya8096/Password-hide-by-satyanarayana",
        tech: 3},
    {img:"./projectimages/Registration Page.png",live:"./commingsoon.html",
        title:"Registration Page",class1:"mt-5 ms-4 me-4",git:"./commingsoon.html",
        tech: 2}
];

// Project Showing Length

var projectLength = projects.length;

showprojects.innerHTML = `Showing ${projectLength} Projects`;




let technologies1 = ["HTML","CSS","JavaScript","ReactJs"];
let technologies2 = ["HTML","CSS"];
let technologies3 = ["HTML","CSS","JavaScript"];
let technologies4 = ["HTML","CSS","JavaScript","Bootstrap5"];


const projectBox1 = technologies1.map(function(value){
    return `<p>${value}</p>`
});
const projectBox2 = technologies2.map(function(value){
    return `<p>${value}</p>`
});
var projectBox3 = technologies3.map(function(value){
    return `<p>${value}</p>`
});
const projectBox4 = technologies4.map(function(value){
    return `<p>${value}</p>`
});




let projectBoxs = projects.map(function(box){
    var key1;
    if(box.tech==2){
        key1 = projectBox2.join("")
    }
    else if(box.tech==3){
        key1 = projectBox3.join("")
    }
    else if(box.tech==4){
        key1 = projectBox4.join("")
    }
    return `
    <div class = projectbox>
        <img src = "${box.img}" >
        <span class="shareicon"><i class="fa-solid fa-share"></i></span>
        <div class="projecttext">
                    <h2 class="text-center m-3">${box.title}</h2>
                    <div class="projecttechnology mb-0 pb-0 d-flex align-items-center justify-content-center flex-wrap">
                        ${key1}
                    </div>
                    <div class="d-flex align-items-center justify-content-between  ${box.class1}">
                        <p><a href="${box.live}" class="text-decoration-none" target="_blank" style="font-weight: bold;" >Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                        <p><a href="${box.git}" class="text-decoration-none" target="_blank" style="font-weight: bold;" >Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                    </div>
        </div>
    </div>
    `
})

projectContent.innerHTML = projectBoxs.join("");