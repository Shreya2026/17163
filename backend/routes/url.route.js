import express from 'express';
import { handleGenerateShortUrl, handleRedirectWeb, handleGetAnalytics } from '../controller/url.controlleer.js';

const router = express.Router();

router.post('/', handleGenerateShortUrl);
router.get('/:shortid', handleRedirectWeb);
router.get('/analytics/:shortid', handleGetAnalytics);

export default router;
