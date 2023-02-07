import cohere from 'cohere-ai';
import env from '../config/index.js';
import { title, body } from '../config/constant.js'
cohere.init(env.COHERE_API_KEY);

export const getResponseCohere = async ({keywordsTitle, keywordsBody}) => {
  if(keywordsBody && keywordsTitle) {
    const response = await cohere.generate({
      model: 'command-medium-nightly',
      prompt: `${title} ${keywordsTitle}`,
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    });
    console.log(`Prediction: ${response.body.generations[0].text}`);
    const response2 = await cohere.generate({
      model: 'command-medium-nightly',
      prompt: `${body} ${keywordsBody}`,
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    });
    console.log(`Prediction: ${response2.body.generations[0].text}`);
    return {keywordsTitle: response.body.generations[0],keywordsBody: response2.body.generations[0]};
  }
  const response = await cohere.generate({
    model: 'command-medium-nightly',
    prompt: keywordsTitle || keywordsBody,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });

  return {keywordsTitle: keywordsTitle ? response.body.generations[0] : '',keywordsBody: keywordsBody ? response.body.generations[0] : ''};
};