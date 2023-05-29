document.getElementById('heading').style.color='#757575';
document.getElementById('heading').style.backgroundColor='#e2e2e2';

document.getElementById('intro').innerHTML = "My name is Florence Wangui and I am 20 years old.";
document.getElementById('intro').style.fontSize="24px";
let paragraph = document.createElement('p');
paragraph.innerHTML = 'I am new'
document.getElementById('container').appendChild(paragraph);
// document.getElementById('container').removeChild(paragraph);
let child= document.getElementById('container').children;
console.log({child});

let button = document.getElementById('button')
button.addEventListener('click', function(){
    button.innerHTML = 'Clicked!!!'
})

document.getElementById('container').setAttribute('class', 'containers');