const routes = {
    404: {
        template: "/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/templates/home.html",
        title: "NK - Home",
        description: "This is the home page",
    },
    "about": {
        template: "/templates/about.html",
        title: "NK - About",
        description: "This is the about page",
    },
    "resume": {
        template: "/templates/resume.html",
        title: "NK - Resume",
        description: "This is the resume page",
    },
};


const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    console.log(location);
    // get the route object from the routes object
    const route = routes[location] || routes["404"];
    console.log(route)
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    console.log(html);
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
