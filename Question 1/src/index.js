const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
const WINDOW_SIZE = 10; // Set the window size
let numbersWindow = []; // Array to hold unique numbers

const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token

app.get('/numbers/:numberid', async (req, res) => {
    const { numberid } = req.params;
    let apiUrl = '';

    // Determine the API URL based on the number ID
    switch (numberid) {
        case 'p':
            apiUrl = 'https://example.com/api/primes'; // Replace with actual API URL
            break;
        case 'f':
            apiUrl = 'https://example.com/api/fibonacci'; // Replace with actual API URL
            break;
        case 'e':
            apiUrl = 'https://example.com/api/even'; // Replace with actual API URL
            break;
        case 'r':
            apiUrl = 'https://example.com/api/random'; // Replace with actual API URL
            break;
        default:
            return res.status(400).json({ error: 'Invalid number ID' });
    }

    try {
        console.log(`Fetching from ${apiUrl}`);
        const response = await axios.get(apiUrl, {
            headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
            timeout: 500
        });

        // Log the full response for debugging
        console.log(`Full Response: ${JSON.stringify(response.data)}`);

        const newNumbers = response.data.numbers || [];
        const uniqueNumbers = Array.from(new Set([...numbersWindow, ...newNumbers]));

        // Maintain the window size
        if (uniqueNumbers.length > WINDOW_SIZE) {
            numbersWindow = uniqueNumbers.slice(-WINDOW_SIZE);
        } else {
            numbersWindow = uniqueNumbers;
        }

        // Calculate the average
        const avg = numbersWindow.length ? (numbersWindow.reduce((a, b) => a + b, 0) / numbersWindow.length).toFixed(2) : 0;

        // Respond with the current state
        res.json({
            windowPrevState: numbersWindow,
            windowCurrState: numbersWindow,
            numbers: newNumbers,
            avg: parseFloat(avg)
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.error(`Stack: ${error.stack}`);
        res.status(500).json({ error: 'Error fetching numbers', details: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
