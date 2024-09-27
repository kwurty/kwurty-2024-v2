import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}',
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],

	theme: {
		extend: {}
	},

	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: { preset: [ "rocket" ] }
		})
	]
} as Config;
