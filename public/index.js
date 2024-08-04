function authenticationPage() {
    window.location.href = '../Pages/Authentication/Authentication.html'
}

function home(){
    window.location.href = './index.html'
}

function Course(){
    window.location.href = '../Pages/Courses/Courses.html'
}

function Software(){
    window.location.href = '../Pages/Store/Store.html'
}

function scrollToCategory() {
    document.getElementById('hero-category').scrollIntoView({ behavior: 'smooth' });
}

function toggleAbout() {
    var summary = document.getElementById('summary');
    var full = document.getElementById('full');
    var button = document.querySelector('.about button');

    if (full.style.display === 'none') {
        full.style.display = 'block';
        summary.style.display = 'none';
        button.textContent = 'Read Less';
    } else {
        full.style.display = 'none';
        summary.style.display = 'block';
        button.textContent = 'Read More';
    }
}

function toggleVisibility(id) {
    var summary = document.getElementById(id + '-summary');
    var full = document.getElementById(id + '-full');
    var button = document.querySelector(`#${id} ~ button`);

    if (full.style.display === 'none') {
        full.style.display = 'block';
        summary.style.display = 'none';
        button.innerHTML = 'Read Less <i class="fa-solid fa-arrow-up"></i>';
    } else {
        full.style.display = 'none';
        summary.style.display = 'block';
        button.innerHTML = 'Read More <i class="fa-solid fa-arrow-right"></i>';
    }
}