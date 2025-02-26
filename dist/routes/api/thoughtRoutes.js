import { Router } from 'express';
import { getThoughts, createThoughts } from '../../controllers/thoughtController.js';
const router = Router();
//localhost/api/thoughts/
router.route('/').get(getThoughts).post(createThoughts);
export default router;
