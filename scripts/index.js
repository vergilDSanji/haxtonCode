function navbarAction() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    if (sidebar.classList.contains('hidden')) {
        // Show sidebar and adjust container
        sidebar.classList.remove('hidden');
        container.classList.remove('active');
    } else {
        // Hide sidebar and adjust container
        sidebar.classList.add('hidden');
        container.classList.add('active');
    }
}