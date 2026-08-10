import { type RequestHandler } from 'express';
import { Ollama } from "ollama";
import { tools,getWeather } from "../aiTools/tools.ts";

const ollama = new Ollama({
  host: "https://ollama.com",
  headers: {
    Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
  },
});


export const getMessage: RequestHandler = async (req, res) => {
  try {
    console.log("Request received!")
    const { prompt } = req.body;
    console.log("prompt!",prompt)
  const messages = [{ role: 'user', content: prompt }];


const response = await ollama.chat({
  model: "gpt-oss:120b",
  messages: messages,
  stream: false,
  tools: tools,
});


if (response.message.tool_calls && response.message.tool_calls.length > 0) {
    const toolCall = response.message.tool_calls[0]!; // non-null assertion: we've checked length > 0
    console.log(`\nModel invoked tool: ${toolCall.function?.name}`);
    console.log(`Arguments:`, toolCall.function?.arguments);

    // Save the model's tool call response to context
    messages.push(response.message);

    // 5. Execute local code based on model decision
    let toolResult = '';
    if (toolCall.function.name === 'getWeather') {
      toolResult = getWeather(toolCall.function.arguments.location);
    }

    // 6. Provide function output back to the model
    messages.push({
      role: 'tool',
      content: toolResult,
    });

    // 7. Final request for human-readable answer
    const finalResponse = await ollama.chat({
      model: 'gpt-oss:120b-cloud',
      messages: messages,
    });

    console.log('\nFinal Answer:');
    console.log(finalResponse.message.content);
    return res.json(finalResponse.message.content);
  } else {
    console.log('\nAnswer:', response.message.content);
  }


    res.json(response.message.content);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};