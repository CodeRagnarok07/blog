import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CodeRagnarok Blog',
			social: {
				github: 'https://github.com/withastro/starlight',
				linkedin: 'https://www.linkedin.com/in/angelriera/',
				email: 'mailto:angelriera1796@gmail.com?subject=with%20astro',
			},

		}),
	],
});
