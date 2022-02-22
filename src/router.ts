import Router from 'koa-router';
import { GetRandomMessage, GetSpecificPainMessage } from './app.controller';
import { handleHealthCheck, handleMonitorTransaction } from './health.controller';

const router = new Router();

router.get('/', handleHealthCheck);
router.get('/health', handleHealthCheck);
router.get('/GetRandomMessage', GetRandomMessage);
router.get('/GetSpecificPainMessage', GetSpecificPainMessage);

export default router;
