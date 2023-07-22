let copynumber = document.querySelector(".number")

let copyemail = document.querySelector(".email")

let copyweb = document.querySelector(".web")

let copyaddress = document.querySelector(".address")

let copiedn = document.querySelector(".copyn")

let copiede = document.querySelector(".copye")

let copiedw = document.querySelector(".copyw")

let copieda = document.querySelector(".copya")

let numbertext = copynumber.textContent

let emaitext = copyemail.textContent

let webtext = copyweb.textContent

let addresstext = copyaddress.textContent


copynumber.onclick = ()=>{
    navigator.clipboard.writeText(numbertext)
    copiedn.innerHTML = "Copied"
    setTimeout(function(){
        copiedn.innerHTML = ""
    },300)
}


copyemail.onclick = ()=>{
    navigator.clipboard.writeText(emaitext)
    copiede.innerHTML = "Copied"
    setTimeout(function(){
        copiede.innerHTML = ""
    },300)
}


copyweb.onclick = ()=>{
    navigator.clipboard.writeText(webtext)
    copiedw.innerHTML = "Copied"
    setTimeout(function(){
        copiedw.innerHTML = ""
    },300)
}

copyaddress.onclick = ()=>{
    navigator.clipboard.writeText(addresstext)
    copieda.innerHTML = "Copied"
    setTimeout(function(){
        copieda.innerHTML = ""
    },300)
}