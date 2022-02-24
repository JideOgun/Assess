async function editReviewHandler(event) {
  event.preventDefault();

  const reviews_text = document.querySelector(
    'textarea[name="review-body"]'
  ).value;

  const company_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/reviews/${company_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      reviews_text,
      company_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.edit-reviews-form')
  .addEventListener('submit', editReviewHandler);
