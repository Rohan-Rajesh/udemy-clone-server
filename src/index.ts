import express from 'express';
import bodyParser from 'body-parser';

import logger from './config/logger';
import config from './config/config';

const NAMESPACE = 'Server';
const app = express();

// * Logger Middleware
app.use((req, res, next) => {
	res.on('finish', () => {
		logger.info(NAMESPACE, `METHOD - ${req.method}, URL - ${req.url}, STATUS - ${req.statusCode}`);
	});

	next();
});

// * Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Bypass CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

// * Error Handling
app.use((req, res, _) => {
	const error = new Error('404 Page Not Found');
	logger.error(NAMESPACE, `404 Page Not Found - ${req.url}`);

	return res.status(404).json({
		message: error.message,
		stack: error.stack || null,
	});
});

app.listen(config.server.port, () =>
	logger.info(NAMESPACE, `Server running - ${config.server.hostname}:${config.server.port}`)
);
