// import {previewData} from 'next/headers';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
import {IndexPageLayout} from '~/components/layout';
import { GET_CATEGORY, GET_HERO } from '~/lib/queries/page';
import console from 'console';

/*
export const generateMetadata = async (): Promise<Metadata> => {
	const page = await sanityClient.fetch<Page>(pageWithPostsQuery, {
		slug: 'posts',
		limit: 2
	});

	const ogImage =
		(page.meta?.openGraphImage && urlForImage(page.meta.openGraphImage).width(800).height(600).fit('crop').url()) ??
		'';

	return {
		title: page.meta?.metaTitle ?? page.title,
		icons: {
			icon: '/favicon/favicon.svg'
		},
		description: page.meta?.metaDescription,
		openGraph: {
			title: page.meta?.openGraphTitle,
			description: page.meta?.openGraphDescription,
			images: [
				{
					url: ogImage,
					width: 800,
					height: 600
				}
			]
		}
	};
};*/

const IndexRoute = async () => {
	const page = await sanityClient.fetch(`*[_type == "start"][0] {"hero": *[_id == ^.hero._ref][0], advantage }`);
  const category = await sanityClient.fetch(GET_CATEGORY);

	return <IndexPageLayout hero={page.hero} category={category} advantage={page.advantage} />;
};

export default IndexRoute;
