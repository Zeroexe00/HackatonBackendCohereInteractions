import { getResponseCohere } from '../service/cohere.js'

export const getCohereResponse = async (req, res, next) => {
  try {
    const { body } = req;
    const response = await getResponseCohere(body);
    res.json(response);
  } catch (error) {
    next(error)
    res.json(error);
  }
}