import { urlFor } from "~/lib/sanity/client";
import { Breadcrumb } from "../breadcrumb";
import { HeroTeaser } from "../HeroTeaser";
import { PriceCard } from "../priceCard";
import RichTextToReact from "../richtext";

const prices = [
	{
		heading: "Wedding Pure",
		price: 100,
		services: ["probetermin für 50€"],
		termin: "",
	},
	{
		heading: "Wedding Pure",
		price: 100,
		services: [
			"probetermin für 50€",
			"probetermin für 50€",
			"probetermin für 50€",
		],
		termin: "",
	},
	{
		heading: "Wedding Pure",
		price: 100,
		services: [
			"probetermin probetermin probetermin probetermin probetermin probetermin probetermin probetermin probeterminfür 50€ probetermin für 50€ probetermin für 50€ probetermin für 50€",
			"fasdf",
		],
		termin: "www.google.de",
	},
	{
		heading: "Wedding Pure",
		price: 100,
		services: [
			"probetermin für 50€ probetermin für 50€ probetermin für 50€ probetermin für 50€",
			"fasdf",
		],
		termin: "www.google.de",
	},
	{
		heading: "Wedding Pure",
		price: 100,
		services: ["probetermin für 50€", "fasdf"],
		termin: "www.google.de",
	},
];

const PostPage = ({ post, serviceType }: { post: any; serviceType: string }) => {
	return (
		<>
			<div className="relative pb-[55vh]">
				<HeroTeaser
          className="mx-auto px-4 md:px-12 lg:px-[10rem] fixed top-[20em] z-[1]"
					title={post.title}
					subTitle={post.subtitle}
					imageSrc={urlFor(post.mainImage).url()}
				/>
			</div>

			<div className="container relative rounded-tr-[2em] bg-white z-[1]">
				<Breadcrumb
					className="pt-8"
					links={[{ label: serviceType, href: `/${serviceType.toLowerCase()}` }]}
				>
					{post.title}
				</Breadcrumb>
				<h2 className="mb-12 pt-8 text-isi leading-none text-[24px] text-center font-bold">
					{post.descriptionTitle ? post.descriptionTitle : "Fallback"}
				</h2>
				<p className="mb-6">{post.description}</p>
				<div>
					<RichTextToReact data={post.body} />
				</div>
				{!!prices.length && (
					<>
						<h3 className="mt-10 mb-8 font-bold text-[1.2rem]">
							Unsere Leistungen
						</h3>
						<ul className="mb-12 flex w-full flex-wrap -mx-2 justify-center md:justify-start">
							{prices.map((price) => {
								return (
									<>
										<li className={`priceList mb-4 w-full sm:w-1/3 px-2`}>
											<PriceCard
												heading={price.heading}
												services={price.services}
												price={price.price}
												termin={price.termin}
											/>
										</li>
									</>
								);
							})}
						</ul>
					</>
				)}
			</div>
		</>
	);
};

export default PostPage;
