document.querySelectorAll('header nav a').forEach(el => {
    el.addEventListener('mouseover', ev => {
        if (window.innerWidth < 630) return;
        el.style.animation = "MakeHeaderNavShadow2 0.15s linear";
        el.style.boxShadow = "0 2px 5px #1b1b40";
        el.style.width = '88px';
        el.style.marginRight = '7px';
    })
    el.addEventListener('mouseout', ev => {
        if (window.innerWidth < 630) return;
        el.style.animation = "RemoveHeaderNavShadow2 0.15s linear"
        el.style.boxShadow = "none";
        el.style.width = '90px';
        el.style.marginRight = '5px';
    })
});

let p = document.querySelector('aside nav > div');
p.addEventListener('mouseover', ev => {
    p.style.animation = "DocsNavCloseBTN-Up 0.15s linear";
    p.style.boxShadow = "0 2px 5px #1b1b40";
});
p.addEventListener('mouseout', ev => {
    p.style.animation = "DocsNavCloseBTN-Down 0.15s linear";
    p.style.boxShadow = "none";
});

let open_nav_btn = document.querySelector('body > .open_nav_btn');
open_nav_btn.addEventListener('click', () => {
    open_nav_btn.style.display = 'none';
    document.querySelector('body main aside').style.display = 'flex';
});
let aside_cls_btn = document.querySelector('body main aside .cls');
aside_cls_btn.addEventListener('click', () => {
    open_nav_btn.style.display = 'flex';
    document.querySelector('body main aside').style.display = 'none';
});
