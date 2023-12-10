const renderLayout = () => {
    // Fetch the navigation HTML
fetch('/components/topBar/nav.html')
.then(response => response.text())
.then(navHtml => {
    // Get the element where you want to insert the navigation
    const navContainer = document.querySelector('#nav');

    // Insert the navigation HTML into the container
    navContainer.innerHTML = navHtml;
})
.catch(error => {
    console.error('Error:', error);
});

}

renderLayout();