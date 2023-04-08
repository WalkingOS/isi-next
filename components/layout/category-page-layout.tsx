import { urlFor } from "~/lib/sanity/client";
import { Breadcrumb } from "../breadcrumb";
import { Contact } from "../contact";
import { HeroTeaser } from "../HeroTeaser";
import { PostList } from "../shared";

const CategoryPageLayout = ({
	category,
	services,
}: {
	category: any;
	services: any;
}) => {
	return (
		<>
			<div className="relative pb-[55vh]">
				<HeroTeaser
					className="mx-auto px-4 md:px-12 lg:px-[10rem] fixed top-[20em] z-[1]"
					title={category.title}
					subTitle={category.subtitle}
					imageSrc={urlFor(category.mainImage).url()}
				/>
			</div>
			<div className="container relative rounded-tr-[2em] bg-white z-[1]">
				<Breadcrumb className="pt-8">{category.title}</Breadcrumb>
				<h2 className="mb-12 pt-8 leading-none text-[24px] text-center font-bold">
					{category.descriptionTitle}
				</h2>
				<p className="mb-6">{category.description}</p>
				<PostList serviceType={category.title.toLowerCase()} services={services} />
				<section className="bg-white mt-10 pb-6">
					<Contact className="rounded-lg" />
				</section>
			</div>
		</>
	);
};

export default CategoryPageLayout;
