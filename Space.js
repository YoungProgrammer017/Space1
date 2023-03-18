let btn = document.querySelector('.btn')
function btnFunc () {
    document.location.href = 'https://www.youtube.com/'
}


let headMenu = document.querySelector ('.headtext_menu')
let head = document.querySelector ('.headtext')
function widthfunc(width) {

    if (width.matches) {
        headMenu.style.display = 'block'
        head.style.display = 'none'
    } else {
        headMenu.style.display = 'none'
        head.style.display = 'flex'
    }
}

let width = window.matchMedia("(max-width: 1000px)")

widthfunc(width) 
width.addListener(widthfunc)
