let copyweb = document.querySelector(".web")

let copiedn = document.querySelector(".copyn")

let copiede = document.querySelector(".copye")

let copiedw = document.querySelector(".copyw")

let copieda = document.querySelector(".copya")

let copyemail = document.querySelector(".email")

let copynumber = document.querySelector(".number")

let copyaddress = document.querySelector(".address")

let webtext = copyweb.textContent

let emaitext = copyemail.textContent

let numbertext = copynumber.textContent

let addresstext = copyaddress.textContent


copynumber.onclick = ()=>{
    navigator.clipboard.writeText(numbertext)
    copiedn.innerHTML = "Copied"
    setTimeout(function(){
        copiedn.innerHTML = ""
    },400)
}

copyemail.onclick = ()=>{
    navigator.clipboard.writeText(emaitext)
    copiede.innerHTML = "Copied"
    setTimeout(function(){
        copiede.innerHTML = ""
    },400)
}

copyweb.onclick = ()=>{
    navigator.clipboard.writeText(webtext)
    copiedw.innerHTML = "Copied"
    setTimeout(function(){
        copiedw.innerHTML = ""
    },400)
}

copyaddress.onclick = ()=>{
    navigator.clipboard.writeText(addresstext)
    copieda.innerHTML = "Copied"
    setTimeout(function(){
        copieda.innerHTML = ""
    },400)
}