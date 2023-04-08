import { ImageOverlay } from "../ImageOverlay";

export const HeroTeaser = ({className="", title, subTitle, imageSrc}: {className: string; title: string; subTitle: string; imageSrc: string}) => {
	return (
		<>
			<div className={className}>
				<h1 className="mb-2 leading-none text-white text-[5rem] font-bold">
					{title}
				</h1>
				<span className="text-[24px] text-white">{subTitle}</span>
			</div>

			<div className="w-full block h-[75vh] fixed top-0">
				<ImageOverlay src={imageSrc} />
			</div>
		</>
	);
};
