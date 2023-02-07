import express from 'express'
import cohere from './cohere-ai.routes.js'

const router = express.Router();

router.use('/cohere-ai', cohere)

export default router;