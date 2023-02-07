import express from 'express'

import { getCohereResponse } from '../controller/cohereController'

const router = express.Router();

router.post('/', getCohereResponse);

export default router;