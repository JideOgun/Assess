
let star = document.querySelectorAll('input');

let star_value = document.querySelector('#rating-value');

async function getStarValue(event) {
    event.preventDefault();
    i = this.value;

    star_value.innerHTML = i;
    // console.log(star_value.innerHTML);
    rating_value = star_value.innerHTML;
    console.log(rating_value);
    
    const company_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

     
 
    const response = await fetch(`/api/ratings`, {
        method: 'POST',
        body: JSON.stringify({ 
            company_id,
            rating_value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
}

for(let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', getStarValue);
}
