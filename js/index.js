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

let h2Tags = document.querySelectorAll('h2');
h2Tags.forEach(tag => {
    tag.addEventListener('mouseover', e => {
        tag.style.color = tag.style.color === 'red' ?
            'black' : 'red';
    })
})

let home = document.querySelector('.home');
let buttons = document.querySelectorAll('.btn');
let emailForm = document.querySelector('form');
let submitEmail = emailForm.children[2];
let success = document.querySelector('.success');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        emailForm.style.display = 
            emailForm.style.display === 'none' ?
                'block' : 'none';

        success.style.display = 'none';
    })
})

submitEmail.addEventListener('click', e =>{
    e.preventDefault();
    let submission = emailForm.children[1].value;
    if (submission !== ''){
        emailForm.style.display = 'none';
        emailForm.children[1].value = '';
        success.style.display = 'block';
    }
});