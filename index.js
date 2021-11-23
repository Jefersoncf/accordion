
let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(accord => {
    accord.onclick = () => {
        accordions.forEach(subAccord => { subAccord.classList.remove('active')});
        accord.classList.add('active');
    }
})