function showSignUp() {
    document.querySelector('.signUp').classList.add('active');
    document.querySelector('.Login').classList.remove('active');
    
    document.querySelector('.SignLog').classList.add('active-left');
    document.querySelector('.SignLog').classList.remove('active-right');
}

function showLogin() {
    document.querySelector('.signUp').classList.remove('active');
    document.querySelector('.Login').classList.add('active');
    
    document.querySelector('.SignLog').classList.add('active-right');
    document.querySelector('.SignLog').classList.remove('active-left');
}

function login(){
    window.location.href = '../../public/index.html'
}

function signIn(){
    window.location.href = '../../public/index.html'
}