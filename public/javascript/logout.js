async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      console.log('calling function logout ')
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
  document.querySelector('#logout').addEventListener('click', logout);