import express from 'express'

import { getCohereResponse } from '../controller/cohereController.js'

const router = express.Router();

router.post('/', getCohereResponse);

export default router;