import cohere from 'cohere-ai';

cohere.init('PSWhG5N84v9Ww1cAiFPv2xoLKovMl6TlTlu4EgUG');

export const getResponseCohere = async () => {
  const response = await cohere.generate({
    model: 'command-medium-nightly',
    prompt: 'Write 5 titles for a blog ideas for the keywords "make blog post better"',
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
};