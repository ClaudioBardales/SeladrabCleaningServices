const classToggle = () => {
    const navs = document.querySelectorAll('.nav-items')

    navs.forEach(nav => nav.classList.toggle('navbar-ToggleShow'));
}

document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);