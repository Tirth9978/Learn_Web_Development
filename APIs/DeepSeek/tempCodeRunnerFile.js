import OpenAI from 'openai';
const openai = new OpenAI({
     baseURL: "https://openrouter.ai/api/v1",
     apiKey: "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",
     defaultHeaders: {
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
     },
});
async function main() {
     const completion = await openai.chat.completions.create({
          model: "deepseek/deepseek-r1-0528:free",
          messages: [
               {
                    "role": "user",
                    "content": "What is the meaning of life?"
               }
          ],

     });

     console.log(completion.choices[0].message);
}

main();