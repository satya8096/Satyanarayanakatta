const FooterTag = document.querySelector("footer");

const navContainer = document.querySelector(".navcontainer");

// Nav Bar

let Nav = 
`<ul class="text-capitalize list-unstyled mt-2 d-flex align-items-center justify-content-between flex-wrap">
<li class="li"><a href="./index.html" class="text-decoration-none">home</a></li>
<li class="li"><a href="./about.html" class="text-decoration-none">about</a></li>
<li class="li"><a href="./education.html" class="text-decoration-none">education</a></li>
<li class="li"><a href="./skills.html" class="text-decoration-none">skills</a></li>
<li class="li"><a href="./certificates.html" class="text-decoration-none">certificates</a></li>
<li class="li"><a href="./projects.html" class="text-decoration-none">projects</a></li>
<li class="li"><a href="./contactme.html" class="text-decoration-none">contact me</a></li>
</ul>
<div>
<button class="m-3 btn1 btn btn-outline-primary"><a href="./login.html" class=" loginbutton text-decoration-none">Login <span class="m-1"><i class="fa-solid fa-arrow-right-from-bracket"></i></span></a></button>
</div>`

navContainer.innerHTML = Nav

// Footer Code

let Footer = `<div class="d-flex align-items-center justify-content-center flex-column flex-wrap gap-4">
<div class="footerlist">
    <ul class="text-capitalize list-unstyled mt-2">
        <li class="li"><a href="./index.html" class="text-decoration-none m-2 text-white">home</a></li>
        <li class="li"><a href="./about.html" class="text-decoration-none m-2 text-white">about</a></li>
        <li class="li"><a href="./education.html" class="text-decoration-none m-2 text-white">education</a></li>
        <li class="li"><a href="./skills.html" class="text-decoration-none m-2 text-white">skills</a></li>
        <li class="li"><a href="./certificates.html" class="text-decoration-none m-2 text-white">certificates</a></li>
        <li class="li"><a href="./projects.html" class="text-decoration-none m-2 text-white">projects</a></li>
    </ul>
</div>
<div class="footericons">
    <a href="https://www.linkedin.com/in/katta-venkata-rama-satyanarayana-b5116224a/" target="_blank"><i class="fa-brands fa-linkedin m-3"></i></a>
    <a href="https://github.com/satya8096" target="_blank"><i class="fa-brands fa-github m-3"></i></a>
    <a href="https://www.instagram.com/its_me_ram_stylish/" target="_blank"><i class="fa-brands fa-instagram m-3"></i></a>
    <a href="#" target="_blank"><i class="fa-brands fa-facebook m-3"></i></a>
</div>
<div class="copyright text-white">
    <p> <span class="decreasesize">Copyright <span style="font-size: 20px;">&copy;</span> 2023 .</span> <span class="decreasesize1">All rights reserved by <a href="https://github.com/satya8096" target="_blank">Satyanarayana Katta</a></span></p>
</div>
</div>`

FooterTag.innerHTML = Footer;