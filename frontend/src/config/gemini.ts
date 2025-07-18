const GEMINI_CONFIG = {
  apiKey: process.env.REACT_APP_GEMINI_API_KEY || '',
  model: 'gemini-2.5-pro-latest',
  temperature: 0.7,
} as const;

export default GEMINI_CONFIG;
