import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Define the path to the static directories
const CSS_DIR = join(__dirname, 'CSS');
const IMAGES_DIR = join(__dirname, 'images'); // Relative path to the images directory

// Serve static files from the specified directories
app.use(express.static(CSS_DIR));
app.use(express.static(IMAGES_DIR));

// Define route handler for HTML files
app.get('/:page', (req, res) => {
    const page = req.params.page;
    const fileName = page.endsWith('.html') ? page : `${page}.html`; // Add .html extension if not provided
    res.sendFile(join(__dirname, fileName));
});

app.listen(PORT, () =>{
    console.log(`Running on Port ${PORT}`);
});
