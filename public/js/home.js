const productionContainers = [...document.querySelectorAll('.production-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


//Looping through each card using for each method
productionContainers.forEach((item, i) => {

    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;


    nxtBtn[i].addEventListener('click', () => {

        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {

        item.scrollLeft -= containerWidth;
    })
})
