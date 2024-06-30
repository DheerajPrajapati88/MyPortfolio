window.addEventListener("load",function(){

    const loader=document.querySelector(".loader");
    loader.classList.add("preloader")

})

document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    cursorMove();
    initAnimations();
    showImg();

});

function cursorMove() {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            duration: 0.4,
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out"
        });
    });

    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => cursor.classList.add("active"));
        link.addEventListener("mouseleave", () => cursor.classList.remove("active"));
    });
}

function smoothScroll() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();

    })();

}

function initAnimations() {


    gsap.to(".logo-in",{
          top:"-80%",
        scrollTrigger:{
            trigger:"body",
            start:"60% 50%",
            end:"60% 50%",
            // markers:true,
            scrub:true
        }
    })
    const tl = gsap.timeline();
        tl.from(".loader span",{
        scale:100,
        opacity:0,    
        ease:"power2.inOut",
        stagger:0.1,
    })
    tl.from(".img-container, .box1, .box2", {
        scale: 0,
        opacity: 0,
        ease: "power5",
        duration: 1
    })
    .to(".home-anim", {
        y: 0,
        delay: 0.2,
        duration: 0.8,
        stagger: 0.2,
        ease: "power1"
    })
    .from(".img, .box1, .box2", {
        y: 10,
        duration:3,
        yoyo:true,
        ease:"power1.inOut",
        repeat: -1,
        x: 10
    });

    setTimeout(() => {
        document.querySelector(".text").style.display = "block";
        const tl1 = gsap.timeline({ repeat: -1 });
        tl1.from(".char", {
            opacity: 0,
            y: 20,
            rotateX: -45,
            stagger: 0.02
        }, "<")
        .to(".char", {
            opacity: 0,
            y: -20,
            rotateX: 45,
            stagger: 0.02
        }, "<1");
    }, 2000);

    gsap.to(".aboutMe .desc p span, .aboutMe h1 span", {
        opacity: 1,
        y: 0,
        ease: "power2",
        stagger: 0.03,
        scrollTrigger: {
            trigger: ".two",
            start: "0% 20%",
            end: "100% 100%",
            scrub: 3
        }
    });

    gsap.to(".marquee_part", {
        xPercent: -100,
        repeat: -1,
        duration: 15,
        ease: "linear"
    });

    gsap.from(".marquee_part2", {
        xPercent: -100,
        repeat: -1,
        duration: 15,
        ease: "linear"
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".three",
            start: "0% 70%",
            end: "80% 100%",
            scrub: 3
        }
    });

    tl2.to(".skills .skills-h1 span", {
        y:0,
        ease: "power2"
    }, "a")
    .from(".designing-icon img, .development-icon img, .development span, .designing span", {
        y: 100,
        opacity: 0,
        stagger: 0.05
    }, "a")
    .from(".marquee_part, .marquee_part2", {
        scale: 0,
        opacity: 0,
        duration: 1
    }, "a");

    gsap.to(".elm h2,.projects-h1 span,.elm .elm_right a",{
        y:0,
        stagger:"0.03",
        // duration:1,
        ease:"power2",
        scrollTrigger:{
            trigger:".four",
            scrub:2,
            // markers:true,
            start: "0% 70%",
            end: "80% 100%",
        }
    })
    gsap.from(".elm .elm_right",{
        y:50,
        stagger:"0.03",
        // duration:1,
        ease:"power2",
        scrollTrigger:{
            trigger:".four",
            scrub:2,
            // markers:true,
            start: "0% 70%",
            end: "80% 100%",
        }
    })
    
    
    const tl3=gsap.timeline({
        scrollTrigger:{
            trigger:".five",
            scrub:3,
            // markers:true,
            start: "0% 70%",
            end: "80% 100%",
        }
    })
    tl3.to(".five .contact span",{
        y:0,
        ease:"power2",
       opacity:1,

 
    },"b")
    tl3.from(".five .contact-info h2,.five .contact-info a",{
       y:100,
       opacity:0,
      duration:1,
       ease:"power2",

},"b")

  gsap.from(".ri-arrow-up-line",{
    y:5,
    opacity:.5,
    yoyo:true,
    repeat:-1,
    duration:1,
    ease:"power2.inOut"
  })
}
function showImg() {
    const fixed = document.querySelector(".fixed_img");
    const elmContainer = document.querySelector(".elm_container");
    const elements = document.querySelectorAll(".elm");

    elmContainer.addEventListener("mouseenter", () => {
        fixed.style.display = "block";
    });

    elmContainer.addEventListener("mouseleave", () => {
        fixed.style.display = "none";
    });

    elements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            const img = element.getAttribute("data_img");
            fixed.style.backgroundImage = `url(${img})`;
        });
    });
}


const menu=document.querySelector(".menu-icon");
const menuLinks=document.querySelector(".menu-bar");
menu.addEventListener("click",function(){
  
   menuLinks.classList.toggle("myToggle");
   menu.classList.toggle('active');



})
menuLinks.addEventListener('click',function(){
    menuLinks.classList.toggle("myToggle");
    menu.classList.toggle('active');
})

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const goUp = document.querySelector(".goto");

    if (scrollHeight > 100) {
        document.querySelector(".goto").style.visibility = "visible";
        document.querySelector(".goto").style.scale= "1";
    } else {
        document.querySelector(".goto").style.visibility = "hidden";
        document.querySelector(".goto").style.scale= "0";
    }
    
    goUp.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left:0,
            behavior:"smooth",
        });
    });
});
