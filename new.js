let firstdiv=document.querySelector(".first-div");
let content=document.querySelector(".content");
let welcome=document.querySelector(".welcome");
let visit=document.getElementById("visit");
let back2=document.getElementById("back2");
visit.addEventListener("click",()=>{
        showhomepage();
        hidewelcome();
        showback();
    });
function showhomepage(){
    content.classList.add("content2");
    firstdiv.classList.add("first-div2");
}

function showback(){
    back2.classList.add("show-back");
    backtoopen.classList.add("backtoopen-hide");
};

function hidewelcome(){
    welcome.classList.add("welcome2");
}
function removeclass(){
    content.classList.remove("content2");
    firstdiv.classList.remove("first-div2");
}

let work=document.getElementById("work");
let backtoopen=document.getElementById("back");
let working=document.querySelector(".working");
let historyStack=[];
 work.addEventListener("click",()=>{
        removeclass();
        working.classList.add("show-working");       
     });
 
 backtoopen.addEventListener("click",()=>{
    welcome.classList.remove("welcome2");
    content.classList.remove("content2");
    firstdiv.classList.remove("first-div2");
    back2.classList.remove("show-back");
    working.classList.remove("show-working");
    cont.classList.remove("contact2");
    About.classList.remove("about-me2");

 });
let about_me=document.getElementById("about");
let About=document.querySelector(".About-me");
about_me.addEventListener("click",()=>{
    About.classList.add("about-me2");
    removeclass();
});
let Contact=document.getElementById("contact");
let cont=document.querySelector(".contact");
Contact.addEventListener("click", ()=>{
    removeclass();
    cont.classList.add("contact2");
});
let removenavclass=()=>{
    cont.classList.remove("contact2");
    About.classList.remove("about-me2");
    working.classList.remove("show-working");
}
back2.addEventListener("click",()=>{
    removenavclass();
    showhomepage();
})

