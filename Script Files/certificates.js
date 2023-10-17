const certiContainer = document.querySelector(".certificate-container");

const certificateShowing = document.querySelector(".certificate-showing");

const internship = document.querySelector(".internship");

const intershipShowing = document.querySelector(".intership-showing");

const certificates = [
    {title:"AWS Cloud Practitioner",img:"./images/AWS cloud practitioner.png",class1:"certibox9"},
    {title:"HTML",img:"./images/HTML.png",class1:"certibox1"},
    {title:"CSS",img:"./images/CSS 1.png",class1:"certibox2"},
    {title:"CSS",img:"./images/CSS.png",class1:"certibox3"},
    {title:"Python",img:"./images/Python.png",class1:"certibox4"},
    {title:"AWS Academy Cloud Foundation",img:"./images/AWS Academy.png",class1:"certibox1"},
    {title:"NDG LINUX",img:"./images/NDG Linux.png",class1:"certibox5"},
    {title:"Red Hat",img:"./images/Redhat.png",class1:"certibox6"},
    {title:"Java Fundamentals",img:"./images/java fundamentals.png",class1:"certibox7"},
    {title:"Data Science",img:"./images/Data Science.png",class1:"certibox8"},
    {title:"Python Certificate",img:"./images/Python certificate by greatlearning.jpg",class1:"certibox1"},
    {title:"AWS EC2 Certificate",img:"./images/EC2 certificate.jpg",class1:"certibox3"},
    {title:"Artificial Inteligence",img:"./images/artificial inteligence certificate.jpg",class1:"certibox6"}
];

const internshipCertificates = [
    {title:"AWS DevOps Internship",img:"./images/AWS internship certificate.jpg",class1:"certibox1"},
    {title:"AWS Cloud Internship",img:"./images/AWS Cloud Certificate.jpg",class1:"certibox7"},
    {title:"Web Development",img:"./images/web development.png",class1:"certibox5"},
    {title:"InternShip and Job preparation",img:"./images/internshala.png",class1:"certibox3"},
    {title:"FRT Internship",img:"./images/FRT.png",class1:"certibox4"}
];

const obj = certificates.map(function(value){
    return `
    <div class="certificate1 ${value.class1}">
            <img src="${value.img}" alt="">
            <h3 class="text-center">${value.title}</h3>
    </div> `
});

const obj1 = internshipCertificates.map(function(value1){
    return `
    <div class="certificate1 ${value1.class1}">
            <h3 class="text-center">${value1.title}</h3>
            <img src="${value1.img}" alt="">
    </div> `
});

certificateShowing.innerHTML = `Showing ${certificates.length} Certificates`;

intershipShowing.innerHTML = `Showing ${internshipCertificates.length} Certificates`;

certiContainer.innerHTML = obj.join("");

internship.innerHTML = obj1.join("")