import { urlFor } from "~/lib/sanity/client";
import { Advantage } from "../advantage";
import { Card } from "../card";
import { ImageOverlay } from "../ImageOverlay";
import Image from "next/image";
import { Contact } from "../contact";
import { PreFooter } from "../ui/PreFooter";
import { SmoothIsiButton } from "../button";

const IndexPage = ({
	hero,
	category,
	advantage,
}: {
	hero: any;
	category: any;
	advantage: any;
}) => {

	return (
		<>
			<div className="w-full h-screen mb-12">
				<ImageOverlay
					className="-mr-5 -ml-5"
					fade
					src={urlFor(hero.mainImage).url()}
				/>
				<div className="container">
					<div className="absolute top-1/4 max-w-[520px]">
						<h1 className='mb-2 relative leading-none text-white text-[64px] lg:text-[124px] font-bold after:absolute after:content-[""] after:bg-isi after:w-1/2 lg:after:w-[60%] after:h-[7px] after:left-[-50px] lg:after:left-[-100px] lg:after:top-[105px] after:top-[55px]'>
							{hero.title}
						</h1>
						<span className="text-[24px] lg:text-[42px] text-white">
							{hero.subtitle}
						</span>
					</div>

          <SmoothIsiButton target="firstHeadline" className="absolute bottom-[15%] left-1/2 -translate-x-2/4 capitalize">
            {hero.calltoaction}
          </SmoothIsiButton>
				</div>
				{/* <div>
          <MuxPlayer playbackId={playbackId} metadata={{video_title: title}} />
        </div> */}
			</div>
			<div className="container">
				<section className="mb-16">
					<h2 id="firstHeadline" className="mb-6 lg:mb-20 text-2xl text-center font-bold">
						Was machen wir?
					</h2>

					<ul className="flex mx-auto max-w-[360px] gap-4 flex-col lg:flex-row lg:flex-row lg:max-w-full lg:gap-6 xl:gap-20 justify-center lg:justify-between">
						{category.map((c) => (

							<li key={c.title} className="lg:w-[360px]">
								<Card
									title={c.title}
									description={c.description}
									href={"/" + c.slug}
									src={urlFor(c.mainImage).url()}
									alt={c.title}
								/>
							</li>
						))}
					</ul>
				</section>
				<section className="mb-16 relative">
					<div className="flex flex-col-reverse	md:flex-row md:justify-between gap-10">
						<div className="relative block md:w-1/2">
							<div className="block relative w-full h-0 pb-[80%]">
								<Image
									src={urlFor(advantage.mainImage).url()}
									alt=""
									layout="fill"
									objectFit="cover"
									className="rounded-xl shadow-xl"
								/>
							</div>
						</div>
						<div className="md:w-1/2">
							<h2 className="mb-6 lg:mb-18 text-center md:text-left font-bold">
								{advantage.title}
							</h2>

							<ul className="flex w-full flex-wrap">
								{advantage.advantages.map(
									(item, i: number) =>
										i < advantage.amount && (
											<li key={i} className="w-1/2 pt-0 pl-0 p-4">
												<Advantage
													title={item.title}
													description={item.description}
													number={i + 1}
												/>
											</li>
										)
								)}
							</ul>
						</div>
					</div>
				</section>
				<section className="mb-16 -mx-4 md:mx-0">
					<Contact className="md:rounded-xl" />
				</section>

				<section className="-mx-4 md:-mx-12 lg:-mx-24 mb-16 2xl:mx-0">
					<h2 className="mb-6 lg:mb-18 text-center font-bold">
						Zufriedene Kunden.
					</h2>
				</section>

				<hr className="bg-isi-dark h-[1px]"></hr>

				<section className="my-16">
					<PreFooter />
				</section>
			</div>
		</>
	);
};

export default IndexPage;
