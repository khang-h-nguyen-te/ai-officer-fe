const fetch = require('node-fetch');

// Test script for API
const apiUrl = 'https://ai-officer-be.vercel.app/ask';

// Test query
const query = "Hello, how can you help me?";

async function testAPI() {
    try {
        console.log(`Sending request to: ${apiUrl}`);
        console.log(`Query: "${query}"`);
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        });
        
        if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`);
            const errorText = await response.text();
            console.error(`Response: ${errorText}`);
            return;
        }
        
        const data = await response.json();
        console.log('Response received:');
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testAPI(); 