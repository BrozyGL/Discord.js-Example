import debug from 'debug'; // https://github.com/debug-js/debug

const defaultLogger = debug(process.env.NAME_SPACE); // calling the debug function and passing the namespace.

const logger = {
	info: (content) => {
		const infoLogger = defaultLogger.extend('info');

		infoLogger(content);
	},
	warn: (content) => {
		const warnLogger = defaultLogger.extend('warn');

		warnLogger(content);
	},
	error: (content) => {
		const errorLogger = defaultLogger.extend('error');

		errorLogger(content);
	},
	debug: (content) => {
		const debugLogger = defaultLogger.extend('debug');

		debugLogger(content);
	},
};

export default logger;