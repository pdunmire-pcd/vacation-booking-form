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
app.use(express.static('public'));

//Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});