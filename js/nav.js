var navVisible = false;

function showNav(){
    
    navVisible = true;
}

function hideNav(){
    document.querySelector('ul.nav-links').style.display = 'none';
    navVisible = false;
}

function toggleNav(){
    document.querySelector('ul.nav-links').classList.toggle('hamburger-visible') 
}