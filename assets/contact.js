var config = {
    apiKey: "AIzaSyDJAFCRfO1obG3-_q1NrRbOE9lFC4b40xw",
    authDomain: "contact-portfolio-d85a6.firebaseapp.com",
    databaseURL: "https://contact-portfolio-d85a6.firebaseio.com",
    projectId: "contact-portfolio-d85a6",
    storageBucket: "contact-portfolio-d85a6.appspot.com",
    messagingSenderId: "950082016813",
    appId: "1:950082016813:web:dc2fd2e87d8d948d680aa4",
    measurementId: "G-XVDQ83XB9N"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function (event) {
    console.log("test")
})