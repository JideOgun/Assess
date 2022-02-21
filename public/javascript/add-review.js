async function addReviewHandler(event) {
    event.preventDefault();
  
    const reviews_text = document.querySelector('textarea[name="review-body"]').value;
 
    const company_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      console.log(company_id);
  
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        reviews_text,
        company_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.review-form').addEventListener('submit', addReviewHandler);