let star = document.querySelectorAll('input');

let showValue = document.querySelector('#rating-value');

function getStarValue() {
    i = this.value;

    showValue.innerHTML = i;
    console.log(showValue.innerHTML);
}

for(let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', getStarValue);
}