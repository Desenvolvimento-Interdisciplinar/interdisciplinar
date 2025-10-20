openMenu.addEventListener('click',() => {
    menu.style.display = 'flex'
    
    menu.style.right = (menu.offsetWidth * -1) + 'px'

    openMenu.style.display = 'none'

    setTimeout(() => {
        menu.style.opacity = '1'

        menu.style.right = '0'
    },10)

})

closeMenu.addEventListener('click',() => {
    menu.style.opacity = '0'
    
    menu.style.left = (menu.offsetWidth * -1) + 'px'

      setTimeout(() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    },10)

}) /* Interattividade menu principal <= 717px */

/*let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});*/

const changeImgButton = document.querySelectorAll("[data-change-img-button]")

changeImgButton.forEach(button =>{
    button.addEventListener ("click", ()=>{
        const imgFull = document.querySelector(".imgFull")
        const images = imgFull.querySelectorAll(".img-display")
        const activeImg = imgFull.querySelector("[data-active]")
        let indexActiveImg = Array.from(images).indexOf(activeImg)

        indexActiveImg = button.dataset.changeImgButton === "next" ? (
            indexActiveImg + 1
        ) : (
            indexActiveImg -1
        )

        if (indexActiveImg >= images.length){
            indexActiveImg = 0
        }

        if (indexActiveImg < 0) {
          indexActiveImg = images.length -1
        }

        activeImg.removeAttribute ("data-active")
        images [indexActiveImg].dataset.active = true
    })
})