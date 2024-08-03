function sidebarAction() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    sidebar.classList.toggle('open');
    container.classList.toggle('expand');
}
