import { Router } from 'express';
import health from './health';

const router = Router();

router.get('/health', health);

export default router;
