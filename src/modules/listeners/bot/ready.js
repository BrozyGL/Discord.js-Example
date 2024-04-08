import { REST, Routes } from 'discord.js';

export default {
	name: 'ready',
	once: false,
	callback: async (client) => {
		client.logger.info(`${client.user.username} connected to ${client.guilds.cache.size} servers!`);

		// loading slash commands on discord. // https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue

		const rest = new REST().setToken(process.env.BOT_TOKEN);

		await rest
			.put(Routes.applicationCommands(client.user.id), {
				body: client.commandsOptions,
			})
			.then((result) => {
				client.logger.info(`${result.length} commands loaded successfully!`);
			});
	},
};
