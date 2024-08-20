let x = document.querySelectorAll('.footer-dvivition');
let displayAboutUs = false;


x.forEach(e => {
    e.addEventListener('mouseover', b => {
        if (displayAboutUs) return
        e.style.animation = 'slide-up 0.3s ease';
        e.style.transform = 'translateY(-10px)';
    });
    e.addEventListener('mouseout', b => {
        if (displayAboutUs) return
        e.style.animation = 'slide-up-reverse 0.3s ease';
        e.style.transform = '';
    });
});

var aboutButton = document.querySelector('.footer-dvivition:nth-child(2)');
x[1].addEventListener('click', e => {
    document.querySelector('body>#aboutUS').style.display = !displayAboutUs == true ? 'flex' : 'none';
    displayAboutUs = !displayAboutUs;
    aboutButton.style.animation = 'slide-up-reverse 0.3s ease';
    aboutButton.style.transform = '';
});
document.querySelector('#aboutUS .box .close').addEventListener('click', e => {
    document.querySelector('body>#aboutUS').style.display = !displayAboutUs == true ? 'flex' : 'none';
    displayAboutUs = !displayAboutUs;
});
