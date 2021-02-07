// Your code goes here
const busImage = document.querySelector('.intro img')

busImage.addEventListener('mouseenter', e =>{
    e.target.style.opacity=.6;
});

busImage.addEventListener('mouseleave', e =>{
    e.target.style.opacity=1;
});

const contentImage = document.querySelectorAll('.img-content img');

contentImage[0].addEventListener('dblclick', e =>{
    let temp = contentImage[1].src;
    contentImage[1].src = contentImage[0].src;
    contentImage[0].src = temp;
});

contentImage[1].addEventListener('dblclick', e =>{
    let temp = contentImage[0].src;
    contentImage[0].src = contentImage[1].src;
    contentImage[1].src = temp;
});

contentImage.forEach(img =>{
    img.addEventListener('contextmenu', e =>{
        e.preventDefault();
    })
})

contentImage.forEach(img =>{
    img.addEventListener('auxclick', e =>{
        e.target.style.transform = 'scaleX(-1)';
    })
})

contentImage.forEach(img =>{
    img.addEventListener('click', e =>{
        e.target.style.transform = 'scaleX(1)';
    })
})