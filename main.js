const praum = document.getElementById("raum")
praum.addEventListener("click", changemode);
function changemode(){
    document.body.classList.toggle("darkmode")
}

const pop = document.querySelector(".popup")
const btn = document.querySelector(".popup button")
const video = document.getElementById("videoscreenwalk")
const pscreenwalk = document.getElementById("screenwalk")

pscreenwalk.addEventListener("click", showscreenwalk);
function showscreenwalk(){
    pop.style.display = "flex"
    video.currentTime = 0
    video.play()
}

btn.addEventListener("click", back);
function back(){
    pop.style.display = "none"
    video.pause()
}

//popup 2
const pop2 = document.getElementById("popup2")
const btn2 = document.querySelector("#popup2 button")
const pmobility = document.getElementById("mobility")

pmobility.addEventListener("click", showgifs);
function showgifs(){
    pop2.style.display = "flex"
}

btn2.addEventListener("click", back2);
function back2(){
    pop2.style.display = "none"
}

//gif slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gifslides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//popup 3
const pop3 = document.getElementById("popup3")
const btn3 = document.querySelector("#popup3 button")
const video3 = document.getElementById("figmavideo")
const pideen = document.getElementById("ideensammlung")

pideen.addEventListener("click", showfigma);
function showfigma(){
    pop3.style.display = "flex"
    video3.currentTime = 0
    video3.play()
}

btn3.addEventListener("click", back3);
function back3(){
    pop3.style.display = "none"
    video3.pause()
}

//popup 4
const pop4 = document.getElementById("popup4")
const btn4 = document.querySelector("#popup4 button")
const pentwurf = document.getElementById("entwurf")

pentwurf.addEventListener("click", showScreens);
function showScreens(){
    pop4.style.display = "flex"
}

btn4.addEventListener("click", back4);
function back4(){
    pop4.style.display = "none"
}

//popup 4 slideshow
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("screenslides");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2-1].style.display = "block";
}

//popup 5
const pop5 = document.getElementById("popup5")
const btn5 = document.querySelector("#popup5 button")
const pinhalt = document.getElementById("inhalt")

pinhalt.addEventListener("click", showLetters);
function showLetters(){
    pop5.style.display = "flex"
}

btn5.addEventListener("click", back5);
function back5(){
    pop5.style.display = "none"
}

//popup 5 slideshow
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("letterslides");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3-1].style.display = "block";
}

//popup 6
const pop6 = document.getElementById("popup6")
const btn6 = document.querySelector("#popup6 button")
const pinfra = document.getElementById("infrastruktur")

pinfra.addEventListener("click", showInfra);
function showInfra(){
    pop6.style.display = "flex"
}

btn6.addEventListener("click", back6);
function back6(){
    pop6.style.display = "none"
}

//popup 7
const pop7 = document.getElementById("popup7")
const btn7 = document.querySelector("#popup7 button")
const proute = document.getElementById("demorouten")

proute.addEventListener("click", showRoute);
function showRoute(){
    pop7.style.display = "flex"
}

btn7.addEventListener("click", back7);
function back7(){
    pop7.style.display = "none"
}

//popup 8
const pop8 = document.getElementById("popup8")
const btn8 = document.querySelector("#popup8 .button")
const precherche = document.getElementById("recherche")

precherche.addEventListener("click", showRecherche);
function showRecherche(){
    pop8.style.display = "flex"
}

btn8.addEventListener("click", back8);
function back8(){
    pop8.style.display = "none"
}

//popup 8 slideshow
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("rechercheimg");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4-1].style.display = "block";
}

//popup 9
const pop9 = document.getElementById("popup9")
const btn9 = document.querySelector("#popup9 button")
const pskizze = document.getElementById("skizze")

pskizze.addEventListener("click", showSkizze);
function showSkizze(){
    pop9.style.display = "flex"
}

btn9.addEventListener("click", back9);
function back9(){
    pop9.style.display = "none"
}




const star = document.getElementById("starbig")
const img = document.getElementById("starsmall")

img.addEventListener("click", showstar);
function showstar(){
    const currentDisplay = window.getComputedStyle(star).display
    star.style.display = currentDisplay === "none" ? "block" : "none"
}

const walk = document.getElementById("starwalk")
const pstrg = document.getElementById("steuerung")

pstrg.addEventListener("click", showwalk);
function showwalk(){
    const currentDisplay = window.getComputedStyle(walk).display
    walk.style.display = currentDisplay === "none" ? "block" : "none"
}


const it1 = document.getElementById("it1")
const it2 = document.getElementById("it2")
const it3 = document.getElementById("it3")
const it4 = document.getElementById("it4")
const it5 = document.getElementById("it5")
const it6 = document.getElementById("it6")
const it7 = document.getElementById("it7")
const it8 = document.getElementById("it8")
const it9 = document.getElementById("it9")
const it10 = document.getElementById("it10")
const it11 = document.getElementById("it11")

const sub1 = document.getElementById("sub1")
const sub2 = document.getElementById("sub2")
const sub3 = document.getElementById("sub3")
const sub4 = document.getElementById("sub4")
const sub5 = document.getElementById("sub5")
const sub6 = document.getElementById("sub6")
const sub7 = document.getElementById("sub7")
const sub8 = document.getElementById("sub8")
const sub9 = document.getElementById("sub9")
const sub10 = document.getElementById("sub10")
const sub11 = document.getElementById("sub11")

it1.addEventListener("click", toggleSub1);
function toggleSub1(){
    sub1.classList.toggle("show")
}
it2.addEventListener("click", toggleSub2);
function toggleSub2(){
    sub2.classList.toggle("show")
}
it3.addEventListener("click", toggleSub3);
function toggleSub3(){
    sub3.classList.toggle("show")
}
it4.addEventListener("click", toggleSub4);
function toggleSub4(){
    sub4.classList.toggle("show")
}
it5.addEventListener("click", toggleSub5);
function toggleSub5(){
    sub5.classList.toggle("show")
}
it6.addEventListener("click", toggleSub6);
function toggleSub6(){
    sub6.classList.toggle("show")
}
it7.addEventListener("click", toggleSub7);
function toggleSub7(){
    sub7.classList.toggle("show")
}
it8.addEventListener("click", toggleSub8);
function toggleSub8(){
    sub8.classList.toggle("show")
}
it9.addEventListener("click", toggleSub9);
function toggleSub9(){
    sub9.classList.toggle("show")
}
it10.addEventListener("click", toggleSub10);
function toggleSub10(){
    sub10.classList.toggle("show")
}
it11.addEventListener("click", toggleSub11);
function toggleSub11(){
    sub11.classList.toggle("show")
}


// Parallax + mouse-follow for images inside `#imagemap`
(function(){
    // Select all background images inside #imagemap
    const parallaxImages = document.querySelectorAll('#imagemap img')
    if(!parallaxImages.length) return

    // rAF guard so we don’t queue multiple frames at once
    let ticking = false
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    function updateParallax(){
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        // Calculate how far the mouse is from the center of the viewport
        const mouseOffsetX = (mouse.x - windowWidth / 2) * 0.08
        const mouseOffsetY = (mouse.y - windowHeight / 2) * 0.05

        parallaxImages.forEach(img => {
            // Get the image position to compute scroll-based movement
            const rect = img.getBoundingClientRect()
            const imgCenter = rect.top + rect.height / 2
            const scrollOffset = (imgCenter - windowHeight / 2) * 0.06

            // Horizontal movement comes from the mouse.
            // Vertical movement combines scroll position and mouse Y offset.
            const translateX = mouseOffsetX
            const translateY = scrollOffset + mouseOffsetY * 0.5

            // Apply the calculated transform to each image
            img.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`
        })

        ticking = false
    }

    function requestTick(){
        if(!ticking){
            window.requestAnimationFrame(updateParallax)
            ticking = true
        }
    }

    // Update parallax on scroll / resize / mouse movement
    window.addEventListener('scroll', requestTick, { passive: true })
    window.addEventListener('resize', requestTick)
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX
        mouse.y = e.clientY
        requestTick()
    }, { passive: true })

    // Set initial image positions before any user input
    updateParallax()
})()