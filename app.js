// collapse and decollapse when click on double arrow toggled sidebar
const toggleButton = document.getElementById("toggle-btn")
const sidebar = document.getElementById("sidebar")

function toggleSidebar() { //when click the double arrow
    sidebar.classList.toggle('close') // add close class to sidebar will close the sidebar
    toggleButton.classList.toggle('rotate') // this add rotate class to sidebare which rotate the doublearrow icon

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => { // if collapsed shod close every shub menus and dorpdowns that are shown
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

// the function that toggle sub menus or dorpdowns
function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show') // add show class to the toggled button
    button.classList.toggle('rotate') // add toggle class to the arrow icon wiht dropdown button

    // if the sidebar collapsed and user click on dropdown menu this should happen to open sidebar again
    if(sidebar.classList.contains('close')) { // check that it is collapsed by close class in the sidebar
        sidebar.classList.toggle('close') // will open it
        toggleButton.classList.toggle('rotate') // and rotate the double arrow
    }


}