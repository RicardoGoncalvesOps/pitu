import {Router} from 'express';
import linkscontrollers from '../controllers/links';

const router = Router();

router.post('/links/', linkscontrollers.postLink);

router.get('/links/:code', linkscontrollers.hitLink);

router.get('/link/:code/stats', linkscontrollers.getLink);


export default router;

