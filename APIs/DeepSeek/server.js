const axios = require('axios');

const DEEPSEEK_API_KEY = "<Key>";
const API_URL = "https://api.deepseek.com/v1/chat/completions";

async function callDeepSeek() {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "deepseek-chat",
                messages: [{ role: "user", content: "Hello!" }],
            },
            {
                headers: {
                    "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.data.choices[0].message.content);
    } catch (error) {
        if (error.response?.data?.error?.code === 'invalid_request_error') {
            console.error("❌ Error: Insufficient API balance. Add credits at: https://platform.deepseek.com/billing");
        } else {
            console.error("Failed to call API:", error.message);
        }
    }
}

callDeepSeek();