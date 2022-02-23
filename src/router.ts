import Router from 'koa-router';
import { RandomMessage } from './app.controller';
import { handleHealthCheck, handleMonitorTransaction } from './health.controller';

const router = new Router();

router.get('/', handleHealthCheck);
router.get('/health', handleHealthCheck);
router.get('/getrandommessage', RandomMessage); 

export default router;
