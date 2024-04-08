import { Client } from 'discord.js'; // Accessing the discord.js client. // https://discord.js.org/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ListenersHandler from './modules/handlers/ListenersHandler.js'; // Event handler
import logger from './utils/helpers/logger.js'; // using debug to pass the necessary loggers.

const client = new Client({
	intents: ['Guilds'], // intents needed by the client! https://discordjs.guide/popular-topics/intents.html#privileged-intents
}); // instantiating the client to be able to access the bot.

// obtaining the values ​​of the commands.
const folders = fs.readdirSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'commands'));
const commandsOptions = [];

for (const folder of folders) {
    const files = fs.readdirSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'commands', folder));

    for (const file of files) {
        if (file.endsWith('.js')) {
            const options = (await import(`./commands/${folder}/${file}`)).default;

            commandsOptions.push(options);
        }
    }
}

client.logger = logger; // passing the logger globally on the client.
client.commandsOptions = commandsOptions; // passing the commandsOptions globally on the client.

ListenersHandler(client); // calling the function and passing the necessary arguments!

client.login(process.env.BOT_TOKEN); // logging into the bot with the token!
