const getTimeStamp = (): string => {
	return new Date().toISOString();
};

const info = (namespace: string, message: string, data?: any) => {
	if (data) {
		console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}: `, data);
	} else {
		console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
	}
};

const warn = (namespace: string, message: string, data?: any) => {
	if (data) {
		console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}: `, data);
	} else {
		console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
	}
};

const error = (namespace: string, message: string, data?: any) => {
	if (data) {
		console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}: `, data);
	} else {
		console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
	}
};

const debug = (namespace: string, message: string, data?: any) => {
	if (data) {
		console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}: `, data);
	} else {
		console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
	}
};

export default {
	info,
	warn,
	error,
};
