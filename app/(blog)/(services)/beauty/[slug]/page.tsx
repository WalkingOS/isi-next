import type {Metadata} from 'next';
import {previewData} from 'next/headers';
import {postQuery, postsQuery} from '~/lib/queries';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
import {PostPageLayout} from '~/components/layout';
import {Error} from '~/components/layout';

import type {Post} from '~/models/post';

export const generateStaticParams = async () => {
	const postsData = await sanityClient.fetch<Post[]>(postsQuery, {
		limit: 100
	});

	return postsData.map((post) => ({
		slug: post.slug.current
	}));
};

/* export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
	const post = await sanityClient.fetch<Post>(postQuery, {
		slug: params.slug
	});

	const ogImage =
		(post.meta?.openGraphImage &&
			urlForImage(post.meta.openGraphImage).width(800).height(600).fit('crop').url()) ??
		'';

	return {
		title: post.meta?.metaTitle ?? post.title,
		description: post.meta?.metaDescription,
		icons: {
			icon: '/favicon/favicon.svg'
		},
		openGraph: {
			title: post.meta?.openGraphTitle,
			description: post.meta?.openGraphDescription,
			images: [
				{
					url: ogImage,
					width: 800,
					height: 600
				}
			]
		}
	};
}; */

const PostRoute = async ({params}: {params: {slug: string}}) => {
	const post = await sanityClient.fetch('*[_type == "service" && slug.current == $slug][0]', {
		slug: params.slug
	});


  const serviceTypeQuery = `
  *[_type == "service" && slug.current == $slug][0] { "serviceType": *[_id == ^.categories[0]._ref][0].title }
  `


const serviceType = await sanityClient.fetch(serviceTypeQuery, {
  slug: params.slug
});

if (!post || !serviceType) {
  return <Error/>;
}

return <PostPageLayout serviceType={serviceType.serviceType} post={post} />;
};

export default PostRoute;
