document.querySelectorAll('header nav a').forEach(el => {
    el.addEventListener('mouseover', ev => {
        if (window.innerWidth < 630) return;
        el.style.animation = "MakeHeaderNavShadow2 0.15s linear";
        el.style.boxShadow = "0 2px 5px #1b1b40";
        el.style.height = '38px';
        el.style.width = '68px';
        el.style.marginRight = '7px';
    })
    el.addEventListener('mouseout', ev => {
        if (window.innerWidth < 630) return;
        el.style.animation = "RemoveHeaderNavShadow2 0.15s linear"
        el.style.boxShadow = "none";
        el.style.height = '40px';
        el.style.width = '70px';
        el.style.marginRight = '5px';
    })
});

let p = document.querySelector('aside nav > div');
p.addEventListener('mouseover', ev => {
    p.style.animation = "DocsNavCloseBTN-Up 0.15s linear";
    p.style.boxShadow = "0 2px 5px #1b1b40";
    // p.style.marginRight = '1px';
});
p.addEventListener('mouseout', ev => {
    p.style.animation = "DocsNavCloseBTN-Down 0.15s linear";
    p.style.boxShadow = "none";
    // p.style.marginRight = '0';
});