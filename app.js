// Step 1: In the terminal while in this project's root folder, do the following command: npm init -y



// Step 2: Install express through the command line: npm install express



// Step 3: Install the following dev dependencies (nodemon if not installed globally and morgan) through the terminal: npm install -D nodemon morgan or npm install -D morgan if nodemon is already installed globally



// Step 4: Require your packages by setting constant variables with the same names: express & morgan

const express = require('express');
const morgan = require('morgan');

// Step 5: Set an instance of the express application: "express()" to the constant variable "app"

const app = express();

// Step 6: Set your port number to 3000 with the const PORT

const PORT = 3000;

// Step 7: Initialize the use of the morgan middleware by saying: app.use(morgan('combined'));
    // This will make your app log some code in the console every time a new request is made to your server

app.use(morgan('combined'));

// ROUTES
// Step 10: Write a get route so the server sends the message `This is the homepage` through response.send(`message`); when a client requests the homepage through the '/' url path.
    // Test it out by going to http://localhost:3000/ in your browser. You should see 'This is the homepage' come up in your browser window if you used "nodemon app.js" in the last step. 

app.get('/', (request, response) => {
    response.send(`This is the homepage.`);
}); 

// Step 11: Create a folder called "views" in the root of this application. In that folder, create another folder called "pages". In that folder, create an HTML document called about.html. Make the basic boilerplate by typing ! and pressing enter. Then, in the body, make a single h1 tag that contains the following text: "This about.html document is being served up as a response."



// Step 12: Create a route in this file that responds to the request: '/about'. The response in this route should use the .sendFile method to send the about.html page as the response. Don't forget about __dirname being an environment variable that stores the path to the application's root folder and the fact that you can concatenate __dirname with the file path to the proper html file you want to be displayed as a response. Test that this path is working in your browser by typing in "http://localhost:3000/about"

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/pages/about.html');
});

// Step 13: If you want to submit this, create a .gitignore file that ignores the node_modules folder, upload the project to your github, and submit the URL to the assignment submission spot in Moodle. 



// SERVER
// Step 8: write the code to have your server start listening on port 3000 (saved in the const PORT), and when the server is running, have it console.log(`The server is listening on port ${PORT}`)

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});

// Step 9: Test out the server by typing in the console: nodemon app.js (This will start the server. Use ctrl + C to stop the server when you're ready to stop.)



