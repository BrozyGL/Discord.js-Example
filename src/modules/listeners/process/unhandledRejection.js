export default {
	name: 'unhandledRejection',
	callback: (client, reason) => {
		client.logger.error(`Unhandled promise rejection: ${reason}`);
	},
};