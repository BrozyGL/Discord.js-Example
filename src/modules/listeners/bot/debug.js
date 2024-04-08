export default {
	name: 'debug',
	callback: (client, message) => {
		client.logger.debug(message);
	},
};