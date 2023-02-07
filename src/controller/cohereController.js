import { getResponseCohere } from '../service/cohere'

export const getCohereResponse = async (req, res, next) => {
  try {
    const { body } = req;
    const response = await getResponseCohere(body);
    return response;
  } catch (error) {
    next(error)
  }
}