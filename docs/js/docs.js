let x = document.querySelectorAll('.footer-dvivition');
let displayAboutUs = false;
let displaySupportMenu = false;

x.forEach(e => {
    e.addEventListener('mouseover', b => {
        if (displayAboutUs || displaySupportMenu) return
        e.style.animation = 'slide-up 0.3s ease';
        e.style.transform = 'translateY(-10px)';
    });
    e.addEventListener('mouseout', b => {
        if (displayAboutUs || displaySupportMenu) return
        e.style.animation = 'slide-up-reverse 0.3s ease';
        e.style.transform = '';
    });
});

var aboutButton = document.querySelector('.footer-dvivition:nth-child(2)');
x[0].addEventListener('click', e => {
    document.querySelector('body>#aboutUS').style.display = !displayAboutUs && !displaySupportMenu ? 'flex' : 'none';
    displayAboutUs = !displaySupportMenu ? !displayAboutUs : displayAboutUs;
    aboutButton.style.animation = 'slide-up-reverse 0.3s ease';
    aboutButton.style.transform = '';
});
document.querySelector('#aboutUS .box .close').addEventListener('click', e => {
    document.querySelector('body>#aboutUS').style.display = !displayAboutUs && !displaySupportMenu ? 'flex' : 'none';
    displayAboutUs = !displaySupportMenu ? !displayAboutUs : displayAboutUs;
});

var supportButton = document.querySelector('.footer-dvivition:last-child');
x[x.length - 1].addEventListener('click', e => {
    document.querySelector('body>#support').style.display = !displaySupportMenu && !displayAboutUs ? 'flex' : 'none';
    displaySupportMenu = !displayAboutUs ? !displaySupportMenu : displaySupportMenu;
    supportButton.style.animation = 'slide-up-reverse 0.3s ease';
    supportButton.style.transform = '';
});
document.querySelector('#support .box .close').addEventListener('click', e => {
    document.querySelector('body>#support').style.display = !displaySupportMenu && !displaySupportMenu ? 'flex' : 'none';
    displaySupportMenu = !displayAboutUs ? !displaySupportMenu : displaySupportMenu;
});

var list = document.querySelector('section .list ul');
fetch('methods.json').then((resp) => resp.text()).then(function (data) {
    let parse = JSON.parse(data);
    parse.forEach(e => {
        let newATag = document.createElement('a');
        let newLiTag = document.createElement('li');
        newLiTag.append(document.createTextNode(e));
        newATag.appendChild(newLiTag);
        newATag.setAttribute('href', `${e}.html`);
        list.appendChild(newATag);
    });
});