/*
export const generateMetadata = async (): Promise<Metadata> => {
	const page = await sanityClient.fetch<Page>(pageQuery, {
		slug: 'posts'
	});

	const ogImage =
		(page.meta?.openGraphImage && urlForImage(page.meta.openGraphImage).width(800).height(600).fit('crop').url()) ??
		'';

	return {
		title: page.meta?.metaTitle ?? page.title,
		description: page.meta?.metaDescription,
		icons: {
			icon: '/favicon/favicon.svg'
		},
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

const IndexPage = async () => {
/* 	const services = await sanityClient.fetch(
		'*[_type == "service" && "Hair" in categories[]->title] {title, description, slug}'
	);

	const category = await sanityClient.fetch(
		`*[_type == "category" && title=="Hair"][0] {title, subtitle, descriptionTitle, description, mainImage}`
	); */

	// const [page, posts] = await Promise.all([pageData, postsData]);

	return (
		<span>pricess</span>
	);
};

export default IndexPage;
