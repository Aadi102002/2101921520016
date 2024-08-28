const express = require('express');
const app = express();
const port = 9876;

// Function to generate numbers based on the ID
const generateNumbers = (id) => {
    switch (id) {
        case 'p':
            // Generate a list of prime numbers (example)
            return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        case 'f':
            // Generate a list of Fibonacci numbers (example)
            return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        case 'e':
            // Generate a list of even numbers (example)
            return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
        case 'r':
            // Generate a list of random numbers (example)
            return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
        default:
            return [];
    }
};

// API endpoint to get numbers based on the ID
app.get('/numbers/:id', (req, res) => {
    const id = req.params.id;
    const numbers = generateNumbers(id);

    if (!['p', 'f', 'e', 'r'].includes(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }

    res.json({ numbers });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
