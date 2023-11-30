const InputPrompt = require("../models/inputs-prompt")
const openai = require("../config/openai")

module.exports = {
    async senText(req, res) {
        const openAPI = openai.configuration()
        const InputPrompt = new InputPrompt(req.body)

        try {
            const responde = await openaAI.createCompletion(
                openai.textCompletion("me de nomes de artiso de nomves de node")
            )

            return res.status(200).json ({
                sucess: true,
                data: response.data.choices[0].text
            })

            } catch (error) {
                return res.status(400).json({
                    sucess: false,
                    error: error.response ? error.response.data :
                    "there was a ninssue on the server"    
                })
            }
        }

    }