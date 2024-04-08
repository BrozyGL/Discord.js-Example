export default {
	name: 'ping-example',
	description: 'ping command example!',
	callback: async (client, interaction) => {
		const pingTimestamp = Date.now();
        const reply = await interaction.reply({ content: 'Pong!', ephemeral: true });
        
        const pongTimestamp = Date.now();
        const ping = pongTimestamp - pingTimestamp;
        
        const replyDeleteDelay = 5000; // 5 segundos
        setTimeout(() => {
            reply.delete();
        }, replyDeleteDelay);

        interaction.followUp(`Ping: ${ping}ms`);
	},
};
