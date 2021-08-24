
const burger = document.getElementsByClassName('nav__burger')[0];
const header = document.getElementsByTagName('header')[0];
const nav = document.getElementsByTagName('nav')[0];
let borders = document.getElementsByClassName('border');
if (!borders.length) {
    borders = document.getElementsByClassName('contact__border');
}
if(burger){
    burger.onclick = () => {
        header.classList.toggle('active');
        nav.classList.toggle('active');
        
        };
}

document.onclick = event => {
    if(event.target.classList[0] === 'feedback__input' || event.target.classList[0] === 'feedback__textarea' || event.target.classList[0] === 'contact__input' || event.target.classList[0] === 'contact__textarea') {
        Object.values(borders).map(border => border.classList.remove('visible'));
        event.target.parentElement.classList.add('visible');
    }
    else {
        Object.values(borders).map(border => border.classList.remove('visible'));
    }
}
// booking
const select = document.getElementsByClassName('booking__select')[0];
let options = document.getElementsByClassName('booking__option');
for(option of options){
    option.onclick = event => {
        if(!select.classList[1]){
            select.classList.add('active');
            Object.values(options).map(option => option.classList.remove('hiden'));  
        } else {
            let target = event.target;
            if(event.target.classList[0] !== 'booking__option'){
                target = event.target.parentElement;
            }
        
            Object.values(options).map(option => option.classList.add('hiden'));
            target.classList.remove('hiden');
            select.classList.remove('active');
        }
        
    };
}
// events
const eventsheads = document.getElementsByClassName('events__head');
if(eventsheads){
    for(head of eventsheads) {
        head.onclick = event => {
            let target = event.target.classList[0] === 'events__head' ? event.target : event.target.parentElement;
            target.classList.toggle('active');
        }
    }
}