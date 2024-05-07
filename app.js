// Import the express module
import express from 'express';

// Create an instance of express
const app = express();

// Set the public folder as a static folder to serve static files
app.use(express.static('public'));

// Handle the root route
app.get('/', (req, res) => {
    // Send the index.html file when the root route is accessed
    res.sendFile('index.html', {
        root: 'public'
    });
});

// Set the app to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});