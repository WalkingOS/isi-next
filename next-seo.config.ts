const title = 'ISI Noor';
const description = 'Beauty';
const url = 'https://isi-noor.now.sh/';

const config = {
	title,
	description,
	canonical: url,
	openGraph: {
		type: 'website',
		locale: 'de_DE',
		url,
		site_name: 'isi-noor.now.sh',
		title,
		description,
		images: [
			{
				url: 'https://nextjs-sanity-template.now.sh/favicon.svg',
				alt: title,
				width: 1280,
				height: 720
			}
		]
	}
};

export default config;
