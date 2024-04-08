import CommandHandler from '../../handlers/CommandHandler.js';

export default {
	name: 'interactionCreate',
	callback: (client, interaction) => {
		CommandHandler(client, interaction);
	},
};
