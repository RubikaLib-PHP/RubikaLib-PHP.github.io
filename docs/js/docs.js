var x = document.querySelectorAll('.footer-dvivition');
var displayAboutUs = false;
var displaySupportMenu = false;
var sideListOpen = true;
var iuahuebruocnae = false;

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

let aboutButton = document.querySelector('.footer-dvivition:nth-child(2)');
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

let supportButton = document.querySelector('.footer-dvivition:last-child');
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

let list = document.querySelector('section .list ul');
let fileName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1).replace('.html', '');
fetch('methods.json').then((resp) => resp.text()).then(function (data) {
    let parse = JSON.parse(data);
    parse.forEach(e => {
        let newATag = document.createElement('a');
        let newLiTag = document.createElement('li');
        newLiTag.append(document.createTextNode(e));
        if (fileName == e) {
            newLiTag.style.background = '#4191cf';
        }
        newATag.appendChild(newLiTag);
        newATag.setAttribute('href', `${e}.html`);
        list.appendChild(newATag);
    });

    if (!['', 'inital', 'MainSettings'].includes(fileName)) {
        let currentIndex = parse.indexOf(fileName);
        let prevFileName = currentIndex > 0 ? parse[currentIndex - 1] : null;
        let nextFileName = currentIndex < parse.length - 1 ? parse[currentIndex + 1] : null;

        let backButton = document.querySelector('.buttons a:first-child .button');
        let nextButton = document.querySelector('.buttons a:last-child .button');

        if (prevFileName && fileName.toLowerCase() != 'logout') {
            backButton.textContent = 'صفحه قبلی';
            backButton.parentElement.setAttribute('href', `${prevFileName}.html`);
        }

        if (nextFileName) {
            nextButton.textContent = 'صفحه بعدی';
            nextButton.parentElement.setAttribute('href', `${nextFileName}.html`);
        }
    }
});

document.querySelectorAll('.list .box .line').forEach(e => {
    e.style.transform = `rotate(${iuahuebruocnae ? '-' : ''}45deg)`;
    iuahuebruocnae = !iuahuebruocnae;
});

let d = document.querySelector('.list .box');
d.addEventListener('mouseout', e => {
    if (sideListOpen) {
        d.style.animation = 'ButtonGoUp-reverse 0.25s ease';
        d.style.margin = '5px 5px 20px 0';
        d.style.boxShadow = '';
    }
});
d.addEventListener('mouseover', e => {
    if (sideListOpen) {
        d.style.animation = 'ButtonGoUp 0.25s ease';
        d.style.margin = '10px 10px 15px 0';
        d.style.boxShadow = '2px -5px 10px black';
    }
});
let listSideBar = document.querySelector('section .list');
let listSideBarUL = document.querySelector('section .list ul');
let rr = document.querySelector('.list .box');
d.addEventListener('click', e => {
    if (sideListOpen) {
        listSideBarUL.style.display = 'none';
        listSideBar.style.width = '60px';
        listSideBar.style.height = '60px';
        d.style.animation = 'ButtonGoUp-reverse 0.25s ease';
        d.style.margin = '5px 5px 20px 0';
        d.style.boxShadow = '';
        listSideBar.style.animation = 'closeSideBar 0.25s ease';
        listSideBar.style.borderLeft = 'none';
        listSideBar.style.borderRadius = '5px';
        document.querySelectorAll('.list .box .line').forEach(e => {
            e.style.position = 'relative';
            e.style.transform = 'rotate(0deg)';
        });
        rr.style.justifyContent = 'space-between';
        rr.style.padding = '12px 0';
        listSideBar.style.position = 'fixed';
    } else {
        listSideBarUL.style.display = '';
        listSideBar.style.width = '300px';
        listSideBar.style.height = '3775px';
        d.style.animation = 'ButtonGoUp 0.25s ease';
        d.style.margin = '10px 10px 15px 0';
        d.style.boxShadow = '2px -5px 10px black';
        listSideBar.style.animation = 'OpenSideBar 0.25s ease';
        listSideBar.style.borderLeft = '1px solid black';
        listSideBar.style.borderRadius = '0 5px 5px 0';
        document.querySelectorAll('.list .box .line').forEach(e => {
            e.style.position = 'absolute';
            e.style.transform = `rotate(${iuahuebruocnae ? '-' : ''}45deg)`;
            iuahuebruocnae = !iuahuebruocnae;
        });
        rr.style.justifyContent = 'center';
        rr.style.padding = '0';
        listSideBar.style.position = 'absolute';
    }

    sideListOpen = !sideListOpen;
});
d.click();
