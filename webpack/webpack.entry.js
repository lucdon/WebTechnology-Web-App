//Import all images
requireAll(require.context('./../images/', true));

//Import all SCSS files
requireAll(require.context('./../scss/', true));

//Import all Font files
requireAll(require.context('./../fonts/', true));

// helper function
function requireAll(r) {
    r.keys().forEach(r);
}

//Include client.jsx which is the starting point in the app
import "client";