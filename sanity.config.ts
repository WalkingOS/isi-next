import {defineConfig} from 'sanity';
import {visionTool} from '@sanity/vision';

export default defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	name: 'Studio',
	basePath: '/studio',
	plugins: [
		visionTool()
	]
});
