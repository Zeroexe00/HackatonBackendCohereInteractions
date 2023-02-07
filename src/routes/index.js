import express from 'express'
import cohere from './cohere.routes'

const router = express.Router();

router.use('/cohere-ai', cohere)

export default router;