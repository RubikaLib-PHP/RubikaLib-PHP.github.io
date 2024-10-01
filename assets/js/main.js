document.querySelectorAll('header nav a').forEach(el => {
    el.addEventListener('mouseover', ev => {
        if (window.innerWidth < 606) return;
        el.style.animation = "MakeHeaderNavShadow 0.15s linear";
        el.style.boxShadow = "0 2px 5px #1b1b40";
        el.style.height = '38px';
        el.style.width = '88px';
        el.style.marginRight = '7px';
    })
    el.addEventListener('mouseout', ev => {
        if (window.innerWidth < 606) return;
        el.style.animation = "RemoveHeaderNavShadow 0.15s linear"
        el.style.boxShadow = "none";
        el.style.height = '40px';
        el.style.width = '90px';
        el.style.marginRight = '5px';
    })
});

let no = document.querySelectorAll('#n2');
no.forEach(n2 => {
    n2.onclick = async function () {
        await n2.classList.toggle('n22');
        if (n2.classList.contains('opened')) {
            n2.style.animation = 'CloseHeaderNav320 0.1s linear';
            document.querySelectorAll('#n2 svg')[1].style.display = 'none';
            document.querySelectorAll('#n2 svg')[0].style.display = 'block';
            document.querySelector('#n2 nav').style.display = 'none';
        } else {
            n2.style.animation = 'OpenHeaderNav320 0.1s linear';
            document.querySelectorAll('#n2 svg')[0].style.display = 'none';
            document.querySelectorAll('#n2 svg')[1].style.display = 'block';
            document.querySelector('#n2 nav').style.display = 'flex';
        }
        n2.classList.toggle('opened');
    }
});