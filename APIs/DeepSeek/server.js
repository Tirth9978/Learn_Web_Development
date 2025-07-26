const OpenAI = require("openai")

const openai = new OpenAI({
     baseURL: 'https://api.deepseek.com',
     apiKey: "<Key>"
})

const main = async () => {
     const data = await openai.chat.completions.create({
          messages: [{ role: "system", content: "You are a helpful assistant." }],
          model: "deepseek-chat",
     });

     console.log(data.choices[0].message.content);
}

main()