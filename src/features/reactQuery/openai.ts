import axios from 'axios';

export const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`, // Use env variable!
    'Content-Type': 'application/json',
    'OpenAI-Beta': 'assistants=v2',
  },
});
