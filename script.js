const toggleButton = document.getElementsByClassName('navigation_menu')[0]
const navbarLinks = document.getElementsByClassName('button_hover')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})