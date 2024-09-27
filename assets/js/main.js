document.querySelectorAll('header nav a').forEach(el => {
    el.addEventListener('mouseover', ev => {
        el.style.animation = "MakeHeaderNavShadow 0.15s linear";
        el.style.boxShadow = "0 2px 5px #1b1b40";
        el.style.height = '38px';
        el.style.width = '88px';
        el.style.marginRight = '7px';
    })
    el.addEventListener('mouseout', ev => {
        el.style.animation = "RemoveHeaderNavShadow 0.15s linear"
        el.style.boxShadow = "none";
        el.style.height = '40px';
        el.style.width = '90px';
        el.style.marginRight = '5px';
    })
});