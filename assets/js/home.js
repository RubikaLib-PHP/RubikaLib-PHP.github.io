let b = document.querySelector('#a1 h3');
b.addEventListener('mouseover', e => {
    b.style.animation = "MakeTopARCShadow 0.15s linear";
    b.style.boxShadow = "0 5px 10px #eaeaea";
})
b.addEventListener('mouseout', e => {
    b.style.animation = "RemoveTopARCShadow 0.15s linear"
    b.style.boxShadow = "none";
})