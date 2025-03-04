const burgerMenu = document.querySelector('.burger-menu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a'); // All links in the sidebar

// Toggle the sidebar when the burger menu is clicked
burgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Toggle the 'open' class to show/hide sidebar
});

// Close the sidebar when the close button (X) is clicked
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Remove the 'open' class to close the sidebar
});

// Close the sidebar when any link in the sidebar is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open'); // Remove the 'open' class to close the sidebar
    });
});
