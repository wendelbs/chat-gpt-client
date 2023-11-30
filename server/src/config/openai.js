import OpenAI from "openai";

module.exports = class openai{
    static configuration() {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });
          
          return new OpenAI(configuration);
    }

    static textCompletion({prompt}) {
        return {
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 400,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          };
        }        
    }
 