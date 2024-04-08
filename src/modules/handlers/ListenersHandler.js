import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default async (client) => {
	const folders = fs.readdirSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'listeners'));

	for (const folder of folders) {
		const files = fs.readdirSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'listeners', folder));

		for (const file of files) {
			if (file.endsWith('.js')) {
				const options = await import(`../listeners/${folder}/${file}`);
				const { name, once, callback } = options.default;

				switch (folder) {
					case 'bot':
						if (once) {
							client.once(name, (...args) => callback(client, ...args));
						} else {
							client.on(name, (...args) => callback(client, ...args));
						}
						break;

					case 'process':
						if (once) {
							process.once(name, (...args) => callback(client, ...args));
						} else {
							process.on(name, (...args) => callback(client, ...args));
						}
						break;
				}
			}
		}
	}
};
