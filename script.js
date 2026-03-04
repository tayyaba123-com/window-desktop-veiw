// --- Selectors ---
const desktopScreen = document.querySelector('.desktop');
const desktopMenu = document.querySelector('.desktop-menu');
const desktopIconMenu = document.querySelector('.desktop-icon-menu');
const desktopIconBoxes = document.querySelectorAll('.icon-box');
const startButton = document.querySelector('#start-button');
const startButtonMenu = document.querySelector('.start-button-menu');

// --- Core Logic ---

//  Unified Close Function
function closeAllMenus() {
    startButtonMenu.classList.remove('active');
    desktopMenu.style.display = 'none';
    desktopIconMenu.style.display = 'none';
}

//  Position Helper for menu positions
function positionMenu(element, event) {
    
    element.style.display = 'flex';
    let x = event.clientX;
    let y = event.clientY;

    const rect = element.getBoundingClientRect();
    console.log(rect)
    const viewportWidth = window.innerWidth;
    console.log(viewportWidth)
    const viewportHeight = window.innerHeight;
    console.log(x)

    if (x + rect.width > viewportWidth) x = viewportWidth - rect.width;
    if (y + rect.height > viewportHeight) y = viewportHeight - rect.height;

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

// --- Event Listeners ---

// Start Button
startButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = startButtonMenu.classList.contains('active');
    closeAllMenus();
    if (!isActive) {
        startButtonMenu.style.bottom = '68px';
        startButtonMenu.style.left = '230px';
        startButtonMenu.classList.add('active');
    }
});

// Context Menus
desktopIconBoxes.forEach(box => {
    box.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeAllMenus();
        positionMenu(desktopIconMenu, e);
    });
});

desktopScreen.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    closeAllMenus();
    positionMenu(desktopMenu, e);
});

// Click anywhere else to close
window.addEventListener('click', closeAllMenus);


[desktopMenu, desktopIconMenu, startButtonMenu].forEach(menu => {
    menu.addEventListener('click', (e) => {
        // Only close if they clicked an actual item
        // Ensure your items inside menus have a class like 'menu-item'
        if (e.target.closest('li, button, .menu-item, img')) {
            closeAllMenus();
        }
        e.stopPropagation(); // Prevents the window click from firing
    });
});