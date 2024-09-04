document.addEventListener("DOMContentLoaded", function() {
    // Call the function when the DOM is fully loaded
    get_py_data();
}); //DOMContentLoaded (Document Object Model) is a way to ensure that your JavaScript code runs as soon as the DOM is ready for interaction, 
    // but without waiting for all resources like images and stylesheets to load. It fires as soon as the HTML is fully loaded and parsed, which 
    // is before resources like images, stylesheets, and iframes are fully loaded.
    
    // If you place your JavaScript code in the <head> section or before the end of the <body>, 
    // the script might run before some or all of the DOM elements are created. This can cause errors if your 
    // script tries to manipulate DOM elements that don’t yet exist.
    // To avoid this, you can wrap your JavaScript code in a DOMContentLoaded event listener, which ensures that the 
    // script only runs after the DOM has been fully loaded and is ready for interaction.


function get_py_data()
     {
        //Establish a websocket connection
        const socket = new WebSocket('ws://localhost:5000/get_data_ws');

        document.getElementById("submitButton").addEventListener("click", async function(){
        const data = {
            message : "Requesting data from fastAPI"
        };
        try{
            // Send a message to websocket endpoint
            socket.send(JSON.stringify(data));
            // socket.send("Requesting data from fastAPI")
        }catch (error) {
            console.error('Error; ', error);
        }
        });

        socket.onopen() = function(event) {
            console.log('Connection is open');
        };

        // Handles message received from the websocket endpoint
        socket.onmessage = function(event) {
            console.log(`Received message: ${event.data}`);
            try {
                // If the server sends JSON data, you can parse it here
                const parsedData = JSON.parse(event.data);
                console.log(parsedData);
            } catch (e) {
                console.error('Error parsing JSON:', e);
            }
        };

        // Handles errors that occured at websocket connection
        socket.onerror = function(error) {
            console.error('Error occured on Websocket connection: ', error)
        };

        //Handle Websocket connection being closed
        socket.onclose() = function() {
            console.log('Websocket connection closed');
        };
    }


     // let input = document.querySelector('input[type="number"]');
// input.style.webkitAppearance = 'none';
// function validateForm(){
//    let x=document.forms["form"]["rows"].value;
//    let y=document.forms["form"]["cols"].value;
//    if(x<1){
//        alert("Rows must be filled with Positive natural number ");
//    }
//    return false;
// }
// function display(){
       
//        const column=document.getElementById("cols").value; 
//        const row=document.getElementById("rows").value;
//        let txt;
//        if(row<1){
//            document.getElementById("rowcheck").innerHTML="Please fill Positive Natural number";
//            display();
//        }
//        if(column<1 || column>10){
//        //   txt="Input not valid";
//        document.getElementById("check").innerHTML="Please fill between 1 1o 10";
//        display();
//    }
//    else{
//            document.getElementById("check").innerHTML="";
//            document.getElementById("rowcheck").innerHTML="";
//            let text="";
//            for(let i=0;i<column;i++){
//                text=text+`<input type="text" class="inp">&nbsp;&nbsp;`;
//            }
           
//            document.getElementById("demo").innerHTML=text;
           
//            document.getElementById("btn").style.display="block";
//              document.getElementById("rows").disabled=true; 
//              document.getElementById("cols").disabled=true; 
//              document.getElementById("button").disabled=true; 
//            document.getElementById("btn").addEventListener("click",populate);
//       }
      
//          }