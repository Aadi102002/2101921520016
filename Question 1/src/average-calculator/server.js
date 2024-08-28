const axios = require('axios');

// URL for fetching prime numbers
const url = 'http://20.244.56.144/test/primes'; // Replace with your actual URL

// Bearer token obtained from the API
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0ODIzNTA1LCJpYXQiOjE3MjQ4MjMyMDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRmMjI1NzRiLWE4NmYtNGY2MC05M2RiLTUxMThmN2VmODI1MyIsInN1YiI6InZuczEwYWRpdHlhQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZG1lZCIsImNsaWVudElEIjoiNGYyMjU3NGItYTg2Zi00ZjYwLTkzZGItNTExOGY3ZWY4MjUzIiwiY2xpZW50U2VjcmV0IjoienJ0dlBTbGhUQ0p4bkxmRyIsIm93bmVyTmFtZSI6IkFkaXR5YSBTaW5naCIsIm93bmVyRW1haWwiOiJ2bnMxMGFkaXR5YUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAxOTIxNTIwMDE2In0.UolJ0IlUSSIMxJfefY_MRr8S6heQi73deRRKZ7_J_ZE';

const fetchNumbers = async () => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            timeout: 5000 // Adjust the timeout if needed
        });
        console.log('Fetched numbers:', response.data);
    } catch (error) {
        console.error('Error fetching numbers:', error.response ? error.response.data : error.message);
    }
};

fetchNumbers();
