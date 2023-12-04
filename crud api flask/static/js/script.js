console.log("crud flask");
fetch('/person', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'name': 'rahul as' }),
})
.then(response => response.json())
.then(data => {
    console.log('New person added:', data);
})
.catch(error => console.error('Error adding person:', error));