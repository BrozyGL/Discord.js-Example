export default {
	name: 'error',
	callback: (client, error) => {
		client.logger.error(error);
	},
};