
let navcontainer = document.querySelector(".navcontainer")

let barIcon = document.querySelector(".bars")

let icon = document.querySelector(".bars i")

let signInButton = document.querySelector(".signInbutton")

let backButton = document.querySelector(".backButton")

let containerForSignIn = document.querySelector(".containerForSignIn")

let signUpButton = document.querySelector(".signUpbutton")

let backButtonSignUp = document.querySelector(".backButtonSignUp")

let containerForSignUp = document.querySelector(".containerForSignUp")



barIcon.onclick = ()=>{

    barIcon.classList.toggle("open")

    let isOpen = barIcon.classList.contains("open")

    navcontainer.style.left = isOpen ? "0px" : "-1200px"

    icon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"

    containerForSignIn.style.left = "-1500px"

    containerForSignUp.style.left = "-1500px"
}



signInButton.onclick = () =>{

    containerForSignIn.style.left = "0px"
}


backButton.onclick = () =>{

    containerForSignIn.style.left = "-1500px"
}

signUpButton.onclick = () =>{

    containerForSignUp.style.left = "0px"
}

backButtonSignUp.onclick = () =>{

    containerForSignUp.style.left = "-1500px"
}

