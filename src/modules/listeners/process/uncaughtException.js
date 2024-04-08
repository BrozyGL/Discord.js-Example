export default {
	name: 'uncaughtException',
	callback: (client, error) => {
		client.logger.error(`Unhandled exception: ${error}`);
	},
};