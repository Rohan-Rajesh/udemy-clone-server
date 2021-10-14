import { Request, Response } from 'express';
import logger from '../config/logger';

const NAMESPACE = 'User Controller';

const healthCheck = (req: Request, res: Response) => {
	logger.info(NAMESPACE, 'Health Check Called');

	return res.status(200).send('pong');
};

export default {
	healthCheck,
};
