import type { Metadata } from "next";
import { pageQuery, postsQuery } from "~/lib/queries";
import { sanityClient, urlFor, urlForImage } from "~/lib/sanity/client";
import { PostList } from "~/components/shared";
import type { Page } from "~/models/page";
import type { Post } from "~/models/post";
import page from "../../page";
import { Contact } from "~/components/contact";
import { ImageOverlay } from "~/components/ImageOverlay";
import Link from "next/link";
import { Breadcrumb } from "~/components/breadcrumb";
import { HeroTeaser } from "~/components/HeroTeaser";
import CategoryPageLayout from "~/components/layout/category-page-layout";

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
	const services = await sanityClient.fetch(
		'*[_type == "service" && "Beauty" in categories[]->title] {title, description, slug}'
	);

	const category = await sanityClient.fetch(
		`*[_type == "category" && title=="Beauty"][0] {title, subtitle, descriptionTitle, description, mainImage}`
	);

	// const [page, posts] = await Promise.all([pageData, postsData]);

	return (
		<CategoryPageLayout services={services} category={category}/>
	);
};

export default IndexPage;
