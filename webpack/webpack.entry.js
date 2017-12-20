import "bootstrap/dist/css/bootstrap.css";
//import "rc-time-picker/assets/index.css";
import 'react-datepicker/dist/react-datepicker.css';

//Import all images
requireAll(require.context('./../images/', true));

//Import all SCSS files
requireAll(require.context('./../scss/', true));

// helper function
function requireAll(r) {
    r.keys().forEach(r);
}

//Include client.jsx which is the starting point in the app
import "client";