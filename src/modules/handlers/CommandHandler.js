export default async (client, interaction) => {
	// managing the commands.

	for (const command of client.commandsOptions) {
		const { name, callback } = command;

		if (interaction.commandName === name) {
			callback(client, interaction);
		}
	}
};
