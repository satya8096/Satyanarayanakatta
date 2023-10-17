// Achivements

var Achivecontent = document.querySelector(".achivecontent");

const Achivements = [
    {title:"Greeks For Greeks",content:"Completed +110 codes in Greeks For Greeks",img:"./images/greeksforgreekslogo.jpeg",link:"https://auth.geeksforgeeks.org/user/kattavenkataramasatyanarayana",class1:"greeks"},
    {title:"Leetcode",content:"Completed +20 codes in Leetcode",img:"./images/0_zuhXdNAIUoxEem4-.png",link:"https://leetcode.com/satya8096/",class1:"leetcode"},
    {title:"Codecheff",content:"Completed +180 codes in CodeCheff",img:"./images/zruiknbedz8yqafxbazb.avif",link:"https://www.codechef.com/users/satyanarayana8",class1:"codecheff"},
    {title:"Hackerrank",content:"Completed SQL 3 Star badge in Hackerrank",img:"./images/HackerrankLogo.png",link:"https://www.hackerrank.com/kattasatyanaray1",class1:"codemind"},
    {title:"SQL Badge",content:"Completed 3 Star Badge in Hackerrank",img:"./images/sqlBadge.jpeg",link:"https://www.hackerrank.com/kattasatyanaray1",class1:"codecheff"},
    {title:"Codemind",content:"Completed +450 codes in Codemind by Technical hub",img:"./images/codemindlogo.jpg",link:"https://www.thecodemind.io/app/dashboard.php",class1:"codemind"},
    {title:"Cyber Security Badge",content:"Completed Cyber Security Badge by Cisco Networking Academy",img:"./images/CyberEssentials.png",link:"https://www.credly.com/badges/abb52ae8-dc1f-40d9-80f9-120fc68d7647/public_url",class1:"cyber"},
    {title:"AWS Academy",content:"Completed AWS Academy Cloud Foundations Badge by AWS Academy",img:"./images/image.png",link:"https://www.credly.com/badges/e112650f-2f32-4359-a750-b2adf2f0fcdc/public_url",class1:"awsbadge"}
]

var achi = Achivements.map(function(value2){
    return `
    <div class="box m-5">
            <img src="${value2.img}" alt="">
            <div class="position-absolute ${value2.class1}">
                <h3>${value2.title}</h3>
                <p>${value2.content}</p>
                <button class="btn btn-primary"><a href="${value2.link}" target="_blank" class="btn-link text-white text-decoration-none">Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
            </div>
     </div>
    `
})
Achivecontent.innerHTML = achi.join("");