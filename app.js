//import the express module
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create an instance of express
const app = express();

// define a port number
const PORT = 3001;

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Route: Handle form submission
app.post('/submit-find', (req, res) => {
    // Get form data
    const { destination, 'departure-date': departureDate, 'number-of-travelers': numberOfTravelers } = req.body;
    
    // Log the submitted data (optional)
    console.log('Form submitted:', {
        destination,
        departureDate,
        numberOfTravelers
    });
    
    // Redirect to thank you page
    res.redirect('/thank-you');
});

// Route: Thank you page
app.get('/thank-you', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'thank-you.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});