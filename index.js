const express = require('express')
const cors = require('cors');
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get('/prompt', async (req, res) => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    async function run() {
        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Write a story about a magic backpack."
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.send({data:text, status: 300})
    }

    run();
})



app.get('/', (req, res) => {
    res.send('Hey! This is Crack Ai Server side :)')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})