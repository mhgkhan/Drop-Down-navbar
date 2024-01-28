// BY GHc 


// console.log("hello world");



document.querySelector(".serviceli").addEventListener("mouseenter", (e) => {
    console.log(e.target)
    e.target.querySelector("a").setAttribute("style", "background:white; color:darkmagenta")
    e.target.querySelector("ul").setAttribute("style", "display:flex !important")
})
document.querySelector(".serviceli").addEventListener("mouseleave", (e) => {
    e.target.querySelector("a").setAttribute("style", "background:none; color:white")
    e.target.querySelector("ul").setAttribute("style", "display:none !important")
})