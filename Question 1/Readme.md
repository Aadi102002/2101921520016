Average Calculator Microservice
A microservice that provides an endpoint to fetch numbers based on different categories, manage a sliding window of stored numbers, and calculate the average of the numbers in the window.

Features
Fetch Numbers: Retrieves numbers based on specified categories (prime, Fibonacci, even, random).
Sliding Window: Maintains a sliding window of unique numbers, with a configurable size.
Average Calculation: Computes the average of numbers within the window.
Fast Responses: Ensures responses are generated within 500 milliseconds.
Endpoint
GET /numbers/:id
Fetches numbers based on the provided ID and updates the sliding window.

Parameters
id (string): Type of numbers to fetch.
p: Prime numbers
f: Fibonacci numbers
e: Even numbers
r: Random numbers
Example Request
http
Copy code
GET http://localhost:9876/numbers/e
Example Response
json
Copy code
{
  "windowPrevState": [],
  "windowCurrState": [2, 4, 6, 8],
  "numbers": [2, 4, 6, 8],
  "avg": "5.00"
}
Installation
Prerequisites
Node.js (version 14 or higher)
npm (Node package manager)
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/average-calculator.git
cd average-calculator
Install Dependencies:

bash
Copy code
npm install
Configure API URL:

Edit the index.js file to replace the placeholder URL with the actual third-party API endpoint.

javascript
Copy code
const API_URL = 'https://api.example.com/numbers'; // Replace with the actual API URL
Start the Server:

bash
Copy code
node index.js
The server will start and listen on port 9876 by default.

Usage
Send a GET Request:

Use tools like Postman or curl to test the endpoint.

Example with curl:

bash
Copy code
curl http://localhost:9876/numbers/e
View the Response:

The response will include the previous and current state of the window, the numbers fetched, and the average.

Configuration
WINDOW_SIZE: Configure the size of the sliding window by modifying the WINDOW_SIZE constant in index.js.
Error Handling
500 Error: Returned if the request takes longer than 500 milliseconds or if no data is received.
400 Error: Returned for invalid id parameters.
Contributing
Fork the Repository

Create a Feature Branch:

bash
Copy code
git checkout -b feature/your-feature
Commit Your Changes:

bash
Copy code
git commit -am 'Add some feature'
Push to the Branch:

bash
Copy code
git push origin feature/your-feature
Create a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.